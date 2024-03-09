import { getNhost } from '$lib/nhost';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	signin: async ({ request, cookies, url }) => {
		const formData = await request.formData();
		const nhost = await getNhost(cookies);

		const email = String(formData.get('email'));

		const { error } = await nhost.auth.signIn({
			email,
			options: { redirectTo: `${url.origin}/profile` }
		});

		if (error) {
			console.error(error);
			return fail(500, { success: false, error });
		} else {
			return {
				success: true,
				email,
				error: null
			};
		}
	}
};
