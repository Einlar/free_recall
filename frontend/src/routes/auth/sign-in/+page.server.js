import { getNhost } from '$lib/nhost';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	signin: async ({ request, cookies }) => {
		const formData = await request.formData();
		const nhost = await getNhost(cookies);

		const email = String(formData.get('email'));

		console.log({ email });

		const { error } = await nhost.auth.signIn({ email }); //TODO Should redirectTo /profile

		if (error) {
			console.log(error);
			return fail(500, { success: false, error });
		} else {
			console.log('OK');
			return {
				success: true,
				email,
				error: null
			};
		}
	}
};
