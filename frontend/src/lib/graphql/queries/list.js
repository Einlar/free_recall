import { graphql } from '$gql';

export const GET_LISTS = graphql(/* GraphQL */ `
	query GetLists($where: words_lists_bool_exp) {
		words_lists(where: $where) {
			id
			categories {
				category
			}
			words_aggregate {
				aggregate {
					count
				}
			}
		}
	}
`);

export const GET_LIST_BY_ID = graphql(/* GraphQL */ `
	query GetListById($id: uuid!) {
		words_lists_by_pk(id: $id) {
			type
			words {
				word
				category
				syllables
				frequency
			}
		}
	}
`);

/**
 * Retrieve all the words within some categories.
 */
export const GET_WORDS_BY_CATEGORY = graphql(/* GraphQL */ `
	query GetWordsByCategory($categories: [words_categories_enum!]!) {
		words_words(where: { category: { _in: $categories } }) {
			word
			category
			syllables
			frequency
		}
	}
`);

/**
 * Retrieve all the words that have no category.
 */
export const GET_RANDOM_WORDS = graphql(/* GraphQL */ `
	query GetRandomWords {
		words_words(where: { category: { _is_null: true } }) {
			word
			category
			syllables
			frequency
		}
	}
`);
