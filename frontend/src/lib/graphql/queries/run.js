import { graphql } from '$gql';

export const GET_RUNS = graphql(/* GraphQL */ `
	query GET_RUNS {
		experiments_run {
			id
			name
			lengths
			run_list_type
		}
	}
`);

export const GET_RUN_BY_CODE = graphql(/* GraphQL */ `
	query GET_RUN_BY_CODE($code: Int!) {
		experiments_run(where: { code: { _eq: $code } }) {
			id
			name
			lengths
			run_list_type
		}
	}
`);
