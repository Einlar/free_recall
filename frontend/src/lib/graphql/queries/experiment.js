import { graphql } from '$gql';

export const GET_RECALL = graphql(/* GraphQL */ `
	query GetRecallById($id: uuid!) {
		experiments_recall_by_pk(id: $id) {
			id
			words
		}
	}
`);

export const GET_RECOGNITION = graphql(/* GraphQL */ `
	query GetRecognitionById($id: uuid!) {
		experiments_recognition_by_pk(id: $id) {
			id
			words
			distractors
		}
	}
`);
