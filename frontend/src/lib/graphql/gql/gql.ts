/* eslint-disable */
import * as types from './graphql.js';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation InsertExperiment(\n\t\t$runId: uuid!\n\t\t$listType: words_list_types_enum!\n\t\t$recallListId: uuid!\n\t\t$recallWords: [String!]!\n\t\t$recognitionListId: uuid!\n\t\t$recognitionWords: [String!]!\n\t\t$distractorWords: [String!]!\n\t) {\n\t\tinsert_experiments_experiments_one(\n\t\t\tobject: {\n\t\t\t\trun_id: $runId\n\t\t\t\tlist_type: $listType\n\t\t\t\trecall: { data: { source_list_id: $recallListId, words: $recallWords } }\n\t\t\t\trecognition: {\n\t\t\t\t\tdata: {\n\t\t\t\t\t\tsource_list_id: $recognitionListId\n\t\t\t\t\t\twords: $recognitionWords\n\t\t\t\t\t\tdistractors: $distractorWords\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\trecall_id\n\t\t}\n\t}\n": types.InsertExperimentDocument,
    "\n\tmutation CompleteRecall($id: uuid!, $answers: jsonb!, $completedAt: timestamptz!) {\n\t\tupdate_experiments_recall_by_pk(\n\t\t\tpk_columns: { id: $id }\n\t\t\t_set: { answers: $answers, completed_at: $completedAt }\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n": types.CompleteRecallDocument,
    "\n\tmutation CompleteRecognition($id: uuid!, $answers: jsonb!, $completedAt: timestamptz!) {\n\t\tupdate_experiments_recognition_by_pk(\n\t\t\tpk_columns: { id: $id }\n\t\t\t_set: { answers: $answers, completed_at: $completedAt }\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n": types.CompleteRecognitionDocument,
    "\n\tmutation InsertOrUpdateProfile($age: Int!, $gender: genders_enum!) {\n\t\tinsert_subjects_one(\n\t\t\tobject: { age: $age, gender: $gender }\n\t\t\ton_conflict: { constraint: subjects_pkey, update_columns: [age, gender] }\n\t\t) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n": types.InsertOrUpdateProfileDocument,
    "\n\tquery GetRecallById($id: uuid!) {\n\t\texperiments_recall_by_pk(id: $id) {\n\t\t\tid\n\t\t\twords\n\t\t}\n\t}\n": types.GetRecallByIdDocument,
    "\n\tquery GetRecognitionById($id: uuid!) {\n\t\texperiments_recognition_by_pk(id: $id) {\n\t\t\tid\n\t\t\twords\n\t\t\tdistractors\n\t\t}\n\t}\n": types.GetRecognitionByIdDocument,
    "\n\tquery GetLists($where: words_lists_bool_exp) {\n\t\twords_lists(where: $where) {\n\t\t\tid\n\t\t\tcategories {\n\t\t\t\tcategory\n\t\t\t}\n\t\t\twords_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetListsDocument,
    "\n\tquery GetListById($id: uuid!) {\n\t\twords_lists_by_pk(id: $id) {\n\t\t\ttype\n\t\t\twords {\n\t\t\t\tword\n\t\t\t\tcategory\n\t\t\t\tsyllables\n\t\t\t\tfrequency\n\t\t\t}\n\t\t}\n\t}\n": types.GetListByIdDocument,
    "\n\tquery GetWordsByCategory($categories: [words_categories_enum!]!) {\n\t\twords_words(where: { category: { _in: $categories } }) {\n\t\t\tword\n\t\t\tcategory\n\t\t\tsyllables\n\t\t\tfrequency\n\t\t}\n\t}\n": types.GetWordsByCategoryDocument,
    "\n\tquery GetRandomWords {\n\t\twords_words(where: { category: { _is_null: true } }) {\n\t\t\tword\n\t\t\tcategory\n\t\t\tsyllables\n\t\t\tfrequency\n\t\t}\n\t}\n": types.GetRandomWordsDocument,
    "\n\tquery GetProfile($id: uuid!) {\n\t\tsubjects_by_pk(id: $id) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t\texperiments(order_by: { created_at: desc }, limit: 1) {\n\t\t\t\tid\n\t\t\t\trun {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tlengths\n\t\t\t\t\trun_list_type\n\t\t\t\t}\n\t\t\t\trecall {\n\t\t\t\t\tid\n\t\t\t\t\tcompleted_at\n\t\t\t\t}\n\t\t\t\trecognition {\n\t\t\t\t\tid\n\t\t\t\t\tcompleted_at\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetProfileDocument,
    "\n\tquery GET_RUNS {\n\t\texperiments_run {\n\t\t\tid\n\t\t\tname\n\t\t\tlengths\n\t\t\trun_list_type\n\t\t}\n\t}\n": types.Get_RunsDocument,
    "\n\tquery GET_RUN_BY_CODE($code: Int!) {\n\t\texperiments_run(where: { code: { _eq: $code } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tlengths\n\t\t\trun_list_type\n\t\t}\n\t}\n": types.Get_Run_By_CodeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation InsertExperiment(\n\t\t$runId: uuid!\n\t\t$listType: words_list_types_enum!\n\t\t$recallListId: uuid!\n\t\t$recallWords: [String!]!\n\t\t$recognitionListId: uuid!\n\t\t$recognitionWords: [String!]!\n\t\t$distractorWords: [String!]!\n\t) {\n\t\tinsert_experiments_experiments_one(\n\t\t\tobject: {\n\t\t\t\trun_id: $runId\n\t\t\t\tlist_type: $listType\n\t\t\t\trecall: { data: { source_list_id: $recallListId, words: $recallWords } }\n\t\t\t\trecognition: {\n\t\t\t\t\tdata: {\n\t\t\t\t\t\tsource_list_id: $recognitionListId\n\t\t\t\t\t\twords: $recognitionWords\n\t\t\t\t\t\tdistractors: $distractorWords\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\trecall_id\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation InsertExperiment(\n\t\t$runId: uuid!\n\t\t$listType: words_list_types_enum!\n\t\t$recallListId: uuid!\n\t\t$recallWords: [String!]!\n\t\t$recognitionListId: uuid!\n\t\t$recognitionWords: [String!]!\n\t\t$distractorWords: [String!]!\n\t) {\n\t\tinsert_experiments_experiments_one(\n\t\t\tobject: {\n\t\t\t\trun_id: $runId\n\t\t\t\tlist_type: $listType\n\t\t\t\trecall: { data: { source_list_id: $recallListId, words: $recallWords } }\n\t\t\t\trecognition: {\n\t\t\t\t\tdata: {\n\t\t\t\t\t\tsource_list_id: $recognitionListId\n\t\t\t\t\t\twords: $recognitionWords\n\t\t\t\t\t\tdistractors: $distractorWords\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\trecall_id\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CompleteRecall($id: uuid!, $answers: jsonb!, $completedAt: timestamptz!) {\n\t\tupdate_experiments_recall_by_pk(\n\t\t\tpk_columns: { id: $id }\n\t\t\t_set: { answers: $answers, completed_at: $completedAt }\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CompleteRecall($id: uuid!, $answers: jsonb!, $completedAt: timestamptz!) {\n\t\tupdate_experiments_recall_by_pk(\n\t\t\tpk_columns: { id: $id }\n\t\t\t_set: { answers: $answers, completed_at: $completedAt }\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CompleteRecognition($id: uuid!, $answers: jsonb!, $completedAt: timestamptz!) {\n\t\tupdate_experiments_recognition_by_pk(\n\t\t\tpk_columns: { id: $id }\n\t\t\t_set: { answers: $answers, completed_at: $completedAt }\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CompleteRecognition($id: uuid!, $answers: jsonb!, $completedAt: timestamptz!) {\n\t\tupdate_experiments_recognition_by_pk(\n\t\t\tpk_columns: { id: $id }\n\t\t\t_set: { answers: $answers, completed_at: $completedAt }\n\t\t) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation InsertOrUpdateProfile($age: Int!, $gender: genders_enum!) {\n\t\tinsert_subjects_one(\n\t\t\tobject: { age: $age, gender: $gender }\n\t\t\ton_conflict: { constraint: subjects_pkey, update_columns: [age, gender] }\n\t\t) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation InsertOrUpdateProfile($age: Int!, $gender: genders_enum!) {\n\t\tinsert_subjects_one(\n\t\t\tobject: { age: $age, gender: $gender }\n\t\t\ton_conflict: { constraint: subjects_pkey, update_columns: [age, gender] }\n\t\t) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetRecallById($id: uuid!) {\n\t\texperiments_recall_by_pk(id: $id) {\n\t\t\tid\n\t\t\twords\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetRecallById($id: uuid!) {\n\t\texperiments_recall_by_pk(id: $id) {\n\t\t\tid\n\t\t\twords\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetRecognitionById($id: uuid!) {\n\t\texperiments_recognition_by_pk(id: $id) {\n\t\t\tid\n\t\t\twords\n\t\t\tdistractors\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetRecognitionById($id: uuid!) {\n\t\texperiments_recognition_by_pk(id: $id) {\n\t\t\tid\n\t\t\twords\n\t\t\tdistractors\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetLists($where: words_lists_bool_exp) {\n\t\twords_lists(where: $where) {\n\t\t\tid\n\t\t\tcategories {\n\t\t\t\tcategory\n\t\t\t}\n\t\t\twords_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetLists($where: words_lists_bool_exp) {\n\t\twords_lists(where: $where) {\n\t\t\tid\n\t\t\tcategories {\n\t\t\t\tcategory\n\t\t\t}\n\t\t\twords_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetListById($id: uuid!) {\n\t\twords_lists_by_pk(id: $id) {\n\t\t\ttype\n\t\t\twords {\n\t\t\t\tword\n\t\t\t\tcategory\n\t\t\t\tsyllables\n\t\t\t\tfrequency\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetListById($id: uuid!) {\n\t\twords_lists_by_pk(id: $id) {\n\t\t\ttype\n\t\t\twords {\n\t\t\t\tword\n\t\t\t\tcategory\n\t\t\t\tsyllables\n\t\t\t\tfrequency\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetWordsByCategory($categories: [words_categories_enum!]!) {\n\t\twords_words(where: { category: { _in: $categories } }) {\n\t\t\tword\n\t\t\tcategory\n\t\t\tsyllables\n\t\t\tfrequency\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetWordsByCategory($categories: [words_categories_enum!]!) {\n\t\twords_words(where: { category: { _in: $categories } }) {\n\t\t\tword\n\t\t\tcategory\n\t\t\tsyllables\n\t\t\tfrequency\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetRandomWords {\n\t\twords_words(where: { category: { _is_null: true } }) {\n\t\t\tword\n\t\t\tcategory\n\t\t\tsyllables\n\t\t\tfrequency\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetRandomWords {\n\t\twords_words(where: { category: { _is_null: true } }) {\n\t\t\tword\n\t\t\tcategory\n\t\t\tsyllables\n\t\t\tfrequency\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetProfile($id: uuid!) {\n\t\tsubjects_by_pk(id: $id) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t\texperiments(order_by: { created_at: desc }, limit: 1) {\n\t\t\t\tid\n\t\t\t\trun {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tlengths\n\t\t\t\t\trun_list_type\n\t\t\t\t}\n\t\t\t\trecall {\n\t\t\t\t\tid\n\t\t\t\t\tcompleted_at\n\t\t\t\t}\n\t\t\t\trecognition {\n\t\t\t\t\tid\n\t\t\t\t\tcompleted_at\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetProfile($id: uuid!) {\n\t\tsubjects_by_pk(id: $id) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t\texperiments(order_by: { created_at: desc }, limit: 1) {\n\t\t\t\tid\n\t\t\t\trun {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tlengths\n\t\t\t\t\trun_list_type\n\t\t\t\t}\n\t\t\t\trecall {\n\t\t\t\t\tid\n\t\t\t\t\tcompleted_at\n\t\t\t\t}\n\t\t\t\trecognition {\n\t\t\t\t\tid\n\t\t\t\t\tcompleted_at\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GET_RUNS {\n\t\texperiments_run {\n\t\t\tid\n\t\t\tname\n\t\t\tlengths\n\t\t\trun_list_type\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GET_RUNS {\n\t\texperiments_run {\n\t\t\tid\n\t\t\tname\n\t\t\tlengths\n\t\t\trun_list_type\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GET_RUN_BY_CODE($code: Int!) {\n\t\texperiments_run(where: { code: { _eq: $code } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tlengths\n\t\t\trun_list_type\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GET_RUN_BY_CODE($code: Int!) {\n\t\texperiments_run(where: { code: { _eq: $code } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tlengths\n\t\t\trun_list_type\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;