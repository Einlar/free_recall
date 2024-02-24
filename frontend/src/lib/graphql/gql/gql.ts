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
    "\n\tmutation InsertOrUpdateProfile($age: Int!, $gender: genders_enum!) {\n\t\tinsert_subjects_one(\n\t\t\tobject: { age: $age, gender: $gender }\n\t\t\ton_conflict: { constraint: subjects_pkey, update_columns: [age, gender] }\n\t\t) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n": types.InsertOrUpdateProfileDocument,
    "\n\tquery GetProfile($id: uuid!) {\n\t\tsubjects_by_pk(id: $id) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n": types.GetProfileDocument,
    "\n\t\t\tquery WordLists {\n\t\t\t\twords_lists {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t": types.WordListsDocument,
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
export function graphql(source: "\n\tmutation InsertOrUpdateProfile($age: Int!, $gender: genders_enum!) {\n\t\tinsert_subjects_one(\n\t\t\tobject: { age: $age, gender: $gender }\n\t\t\ton_conflict: { constraint: subjects_pkey, update_columns: [age, gender] }\n\t\t) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation InsertOrUpdateProfile($age: Int!, $gender: genders_enum!) {\n\t\tinsert_subjects_one(\n\t\t\tobject: { age: $age, gender: $gender }\n\t\t\ton_conflict: { constraint: subjects_pkey, update_columns: [age, gender] }\n\t\t) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetProfile($id: uuid!) {\n\t\tsubjects_by_pk(id: $id) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetProfile($id: uuid!) {\n\t\tsubjects_by_pk(id: $id) {\n\t\t\tid\n\t\t\tage\n\t\t\tgender\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tquery WordLists {\n\t\t\t\twords_lists {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery WordLists {\n\t\t\t\twords_lists {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;