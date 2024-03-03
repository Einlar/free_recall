import { graphql } from '$gql';

export const INSERT_EXPERIMENT = graphql(/* GraphQL */ `
	mutation InsertExperiment(
		$runId: uuid!
		$listType: words_list_types_enum!
		$recallListId: uuid!
		$recallWords: [String!]!
		$recognitionListId: uuid!
		$recognitionWords: [String!]!
		$distractorWords: [String!]!
	) {
		insert_experiments_experiments_one(
			object: {
				run_id: $runId
				list_type: $listType
				recall: { data: { source_list_id: $recallListId, words: $recallWords } }
				recognition: {
					data: {
						source_list_id: $recognitionListId
						words: $recognitionWords
						distractors: $distractorWords
					}
				}
			}
		) {
			id
			recall_id
		}
	}
`);

export const COMPLETE_RECALL = graphql(/* GraphQL */ `
	mutation CompleteRecall($id: uuid!, $answers: jsonb!, $completedAt: timestamptz!) {
		update_experiments_recall_by_pk(
			pk_columns: { id: $id }
			_set: { answers: $answers, completed_at: $completedAt }
		) {
			id
		}
	}
`);

export const COMPLETE_RECOGNITION = graphql(/* GraphQL */ `
	mutation CompleteRecognition($id: uuid!, $answers: jsonb!, $completedAt: timestamptz!) {
		update_experiments_recognition_by_pk(
			pk_columns: { id: $id }
			_set: { answers: $answers, completed_at: $completedAt }
		) {
			id
		}
	}
`);
