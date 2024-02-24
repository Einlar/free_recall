import { GET_PROFILE } from '$lib/graphql/queries/profile';
import { getNhost } from '$lib/nhost';
import { redirect } from '@sveltejs/kit';

/** @type {import("./$types").PageServerLoad} */
export async function load({ cookies }) {
	const nhost = await getNhost(cookies);

	const session = nhost.auth.getSession();

	if (!session) {
		redirect(303, '/auth/sign-in');
	}

	// Query the user's profile, if not found, redirect to the profile creation page
	const profile = await nhost.graphql.request(GET_PROFILE, {
		id: session.user.id
	});

	if (!profile.data?.subjects_by_pk) {
		redirect(303, '/profile');
	}
}
