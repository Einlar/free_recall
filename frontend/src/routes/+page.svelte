<script>
	import { getContextClient, gql, queryStore } from '@urql/svelte';
	import { graphql } from '$gql';
	// import { graphql } from '../lib/graphql/gql';

	// const urql =

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

<p>
	Inserisci qui sotto alcune info di base, che saranno usate solamente per differenziare gli
	esperimenti.
</p>

<!-- Query the user data, if they are already present, show them and let them edit via a button -->
<form>
	<label>
		Nome:
		<input name="name" />
	</label>
	<label>
		Età:
		<input type="number" />
	</label>
	<!-- Add gender -->
	<button type="submit">Salva</button>
</form>

<a href="/experiment">Comincia l'esperimento</a>
