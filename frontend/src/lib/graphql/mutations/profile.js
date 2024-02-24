import { graphql } from '$gql';

export let INSERT_OR_UPDATE_PROFILE = /* GraphQL */ graphql(`
	mutation InsertOrUpdateProfile($age: Int!, $gender: genders_enum!) {
		insert_subjects_one(
			object: { age: $age, gender: $gender }
			on_conflict: { constraint: subjects_pkey, update_columns: [age, gender] }
		) {
			id
			age
			gender
		}
	}
`);
