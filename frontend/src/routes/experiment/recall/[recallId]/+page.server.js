import { getNhost } from '$lib/nhost';
import { GET_RECALL } from '$queries';
import { error } from '@sveltejs/kit';

/** @type {import("./$types").PageServerLoad} */
export async function load({ cookies, params }) {
	const nhost = await getNhost(cookies);

	const recallQuery = await nhost.graphql.request(GET_RECALL, { id: params.recallId });
	if (recallQuery.error) error(500);

	const words = recallQuery.data.experiments_recall_by_pk?.words || [];

	if (words.length === 0) error(500);

	return {
		id: params.recallId,
		words
	};
}
