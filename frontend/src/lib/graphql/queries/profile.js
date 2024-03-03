import { graphql } from '$gql';

export const GET_PROFILE = graphql(/* GraphQL */ `
	query GetProfile($id: uuid!) {
		subjects_by_pk(id: $id) {
			id
			age
			gender
			experiments(order_by: { created_at: desc }, limit: 1) {
				id
				run {
					id
					name
					lengths
					run_list_type
				}
				recall {
					id
					completed_at
				}
				recognition {
					id
					completed_at
				}
			}
		}
	}
`);
