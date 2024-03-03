import {
	GET_LISTS,
	GET_LIST_BY_ID,
	GET_PROFILE,
	GET_RANDOM_WORDS,
	GET_RUN_BY_CODE,
	GET_WORDS_BY_CATEGORY
} from '$queries';
import { getNhost } from '$lib/nhost';
import { fail, redirect } from '@sveltejs/kit';
import { Words_List_Types_Enum } from '$gqlTypes';
import { INSERT_EXPERIMENT } from '$mutations';

/** @type {import("./$types").PageServerLoad} */
export async function load({ cookies }) {
	const nhost = await getNhost(cookies);

	const session = nhost.auth.getSession();

	if (!session) {
		redirect(303, '/auth/sign-in');
	}

	// Query the user's profile
	const profile = await nhost.graphql.request(GET_PROFILE, {
		id: session.user.id
	});

	// If not found, redirect to the profile page
	if (!profile.data?.subjects_by_pk) {
		redirect(303, '/profile');
	}

	// Check if the user has any experiment
	const profileData = profile.data.subjects_by_pk;

	if (profileData.experiments.length) {
		const experiment = profileData.experiments[0];
		// If recall is not completed, redirect to the recall page
		if (!experiment.recall?.completed_at) {
			redirect(303, `/experiment/recall/${experiment.recall?.id}`);
		}

		if (!experiment.recognition?.completed_at) {
			redirect(303, `/experiment/recognition/${experiment.recognition?.id}`);
		}

		// If all experiments are completed, redirect to the completed page
		redirect(303, '/experiment/completed');
	}
}

/**
 * Shuffle an array in place using the Durstenfeld shuffle algorithm
 * See: https://stackoverflow.com/a/12646864
 *
 * @template T
 * @param {Array<T>} array
 */
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

/**
 * Pick a random item from an array
 *
 * @template T
 * @param {Array<T>} array
 * @returns {T}
 */
const chooseRandom = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

/** @type {import("./$types").Actions} */
export const actions = {
	selectExperiment: async ({ request, cookies }) => {
		const data = await request.formData();
		const runCode = parseInt(data.get('runCode')?.toString() ?? '0');

		// 0. Retrieve the run by id
		const nhost = await getNhost(cookies);
		const query = await nhost.graphql.request(GET_RUN_BY_CODE, { code: runCode });

		if (query.error) return fail(500, { error: true, message: 'graphql-error' });

		if (query.data.experiments_run.length === 0) {
			return fail(400, { error: true, message: 'run-not-found' });
		}
		const runId = query.data.experiments_run[0].id;

		/** @type {Record<import('$gqlTypes').Experiments_Run_List_Types_Enum, Boolean>} */
		const categorized = {
			categorized_or_random: Math.random() > 0.5,
			only_categorized: true,
			only_random: false
		};

		const { lengths, run_list_type } = query.data.experiments_run[0];

		/** @type {import('$gqlTypes').Words_Lists_Bool_Exp} */
		let where = {};
		const isCategorized = categorized[run_list_type];
		where.type = {
			_eq: isCategorized ? Words_List_Types_Enum.Categorized : Words_List_Types_Enum.Random
		};
		where.words_aggregate = { count: { predicate: { _in: lengths } } };

		// 1. Retrieve lists following the Run specs
		const lists = await nhost.graphql.request(GET_LISTS, { where });
		if (lists.error) return fail(500, { error: true, message: 'graphql-error' });

		/** --- Recall List --- **/
		// 1. Choose a list at random
		const availableLists = lists.data.words_lists;
		const recallList = chooseRandom(availableLists);

		// 2. Retrieve all the words from that list
		const recallListQuery = await nhost.graphql.request(GET_LIST_BY_ID, { id: recallList.id });
		if (recallListQuery.error) return fail(500, { error: true, message: 'graphql-error' });

		// 3. Randomize order
		const recallWords = recallListQuery.data.words_lists_by_pk?.words || [];
		shuffleArray(recallWords);

		/** --- Recognition List --- **/
		// 1. Pick a different list with the same length of the recall list.
		const recallCategories = recallList.categories.map(({ category }) => category);
		let recognitionLists = availableLists.filter(
			(l) => l.id !== recallList.id && l.words_aggregate.aggregate?.count === recallWords.length
		);

		// 2. If categorized, pick one that shares no categories with list.
		if (isCategorized) {
			recognitionLists = recognitionLists.filter(
				(l) =>
					!recallCategories.some((category) =>
						l.categories.map(({ category }) => category).includes(category)
					)
			);
		}

		// 3. Choose a list at random from the ones that satisfy the above conditions
		if (!recognitionLists.length) return fail(500, { error: true, message: 'graphql-error' });
		const recognitionList = chooseRandom(recognitionLists);

		// 4. Retrieve words from it
		const recognitionListQuery = await nhost.graphql.request(GET_LIST_BY_ID, {
			id: recognitionList.id
		});
		if (recognitionListQuery.error) return fail(500, { error: true, message: 'graphql-error' });

		// 5. Randomize their order
		const recognitionWords = recognitionListQuery.data.words_lists_by_pk?.words || [];
		shuffleArray(recognitionWords);

		/** --- Distractors list ---  **/
		// 1. Query all the words from the recognition words categories, or all random words
		const recognitionCategories = recognitionList.categories.map(({ category }) => category);
		const wordsQuery = isCategorized
			? await nhost.graphql.request(GET_WORDS_BY_CATEGORY, {
					categories: /** @type {import('$gqlTypes').Words_Categories_Enum[]} */ (
						recognitionCategories
					)
				})
			: await nhost.graphql.request(GET_RANDOM_WORDS);

		if (wordsQuery.error) return fail(500, { error: true, message: 'graphql-error' });

		// 2. Remove all the distractors appearing in the recognition list
		const allDistractors = wordsQuery.data.words_words.filter(
			({ word }) => !recognitionWords.map(({ word }) => word).includes(word)
		);

		// 3. For each word in the recognition list, pick the distractor with the most similar frequency
		/** @type {String[]} */
		const distractorWords = [];
		for (let idx = 0; idx < recognitionWords.length; idx++) {
			const freqDiff = allDistractors.map((item) =>
				Math.abs(item.frequency - recognitionWords[idx].frequency)
			);
			const minIndex = freqDiff.indexOf(Math.min(...freqDiff));
			distractorWords.push(allDistractors[minIndex].word);
			allDistractors.splice(minIndex, 1); // Remove from the main list as this word has been "used up"
		}

		// 4. Insert the experiment
		const insertExperimentMutation = await nhost.graphql.request(INSERT_EXPERIMENT, {
			runId,
			listType: isCategorized ? Words_List_Types_Enum.Categorized : Words_List_Types_Enum.Random,
			recallListId: recallList.id,
			recallWords: recallWords.map(({ word }) => word),
			recognitionListId: recognitionList.id,
			recognitionWords: recognitionWords.map(({ word }) => word),
			distractorWords
		});

		if (insertExperimentMutation.error) return fail(500, { error: true, message: 'graphql-error' });

		// Start with the recall experiment
		redirect(
			303,
			`/experiment/recall/${insertExperimentMutation.data.insert_experiments_experiments_one?.recall_id}`
		);
	}
};
