import { graphql } from '$gql';

export const GET_PROFILE = graphql(/* GraphQL */ `
	query GetProfile($id: uuid!) {
		subjects_by_pk(id: $id) {
			id
			age
			gender
		}
	}
`);
