import { getNhost } from '$lib/nhost';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	signin: async ({ request, cookies }) => {

		const formData = await request.formData();
		const nhost = await getNhost(cookies);

		const email = String(formData.get('email'));

		console.log({ email })

		const { error } = await nhost.auth.signIn({ email });

		if (error) {
			console.log(error)
			return { error };
		} else {
			console.log("OK")
			redirect(303, '/') // Go back to the home page
		}
	}
};
