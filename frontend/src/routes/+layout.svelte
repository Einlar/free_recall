<script>
	import '../app.pcss';
	import { createClient } from '$lib/graphql/client';
	import { setContextClient } from '@urql/svelte';

	/** @type {import("./$types").LayoutData} */
	export let data;

	/** @type {import('$lib/graphql/client.js').JWT | undefined}*/
	const token = data.session
		? {
				accessToken: data.session.accessToken,
				refreshToken: data.session.refreshToken
			}
		: undefined;

	const urql = createClient({
		gqlEndpoint: data.graphql.gqlEndpoint,
		refreshEndpoint: data.graphql.tokenRefreshEndpoint,
		token
	});

	// Provide client to the other pages
	setContextClient(urql);
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div class="rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-4 text-3xl font-bold">Free Recall</h1>
		<slot />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
	:global(:root) {
		--font-family: 'Roboto', sans-serif;
	}
	:global(h1, h2, h3, h4, h5, h6, p, label, legend) {
		font-family: var(--font-family);
	}
</style>
