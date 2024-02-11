import { getNhost } from '$lib/nhost';
import { redirect } from '@sveltejs/kit';

/** @type {import("./$types").LayoutServerLoad} */
export async function load({ cookies, url }) {
	const nhost = await getNhost(cookies);

	if (!nhost.auth.isAuthenticated() && url.pathname !== "/auth/sign-in") {
		redirect(303, "/auth/sign-in")
	}

	return {
		session: nhost.auth.getSession(),
		graphql: {
			tokenRefreshEndpoint: nhost.auth.url,
			gqlEndpoint: nhost.graphql.httpUrl
		}
	}
}
