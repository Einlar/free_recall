<script>
	import { getContextClient, gql, queryStore } from '@urql/svelte';
	import { graphql } from '$gql';

	// Query the words lists
	const store = queryStore({
		client: getContextClient(),
		query: graphql(/* GraphQL */ `
			query WordLists {
				words_lists {
					id
				}
			}
		`)
	});

	$: console.log($store.data?.words_lists);
</script>
