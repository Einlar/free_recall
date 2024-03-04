import { getNhost } from '$lib/nhost';
import { GET_RECOGNITION } from '$queries';
import { error } from '@sveltejs/kit';

/** @type {import("./$types").PageServerLoad} */
export async function load({ cookies, params }) {
	const nhost = await getNhost(cookies);

	const recognitionQuery = await nhost.graphql.request(GET_RECOGNITION, {
		id: params.recognitionId
	});
	if (recognitionQuery.error) error(500);

	const words = recognitionQuery.data.experiments_recognition_by_pk?.words || [];
	const distractors = recognitionQuery.data.experiments_recognition_by_pk?.distractors || [];

	if (words.length === 0 || distractors.length === 0) error(500);

	return {
		id: params.recognitionId,
		words,
		distractors
	};
}
