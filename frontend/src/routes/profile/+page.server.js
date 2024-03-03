import { INSERT_OR_UPDATE_PROFILE } from '$lib/graphql/mutations/profile';
import { GET_PROFILE } from '$lib/graphql/queries/profile';
import { getNhost } from '$lib/nhost';
import { error, fail, redirect } from '@sveltejs/kit';

/** @type {import("./$types").PageServerLoad} */
export async function load({ cookies }) {
	const nhost = await getNhost(cookies);
	const session = nhost.auth.getSession();

	const userId = session?.user.id;

	if (!userId) {
		redirect(303, '/auth/sign-in');
	}

	const profile = await nhost.graphql.request(GET_PROFILE, {
		id: userId
	});

	if (profile.error) {
		error(500);
	}

	const profileData = profile.data?.subjects_by_pk;

	return {
		email: session.user.email,
		profile: profileData
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	updateProfile: async ({ request, cookies }) => {
		const data = await request.formData();
		const ageString = data.get('age')?.toString();
		const gender = data.get('gender')?.toString();

		console.log({ data });

		const missingFields = [];
		if (!ageString) {
			missingFields.push('age');
		}

		if (!gender) {
			missingFields.push('gender');
		}

		if (missingFields.length > 0) {
			return {
				success: false,
				missingFields
			};
		}

		const nhost = await getNhost(cookies);

		const update = await nhost.graphql.request(INSERT_OR_UPDATE_PROFILE, {
			age: ageString ? parseInt(ageString) : 0,
			gender: /** @type {import('$gqlTypes').Genders_Enum} */ (gender)
		});

		if (update.error) {
			console.log({ error: update.error });
			return fail(500, {
				error: 'graphql-error'
			});
		}

		return {
			success: true,
			profile: update.data.insert_subjects_one
		};
	}
};
