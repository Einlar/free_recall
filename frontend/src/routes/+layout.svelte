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

<div class="flex h-screen w-full items-center justify-center bg-white">
	<div class="w-full max-w-5xl rounded-lg bg-white p-8">
		<slot />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
	:global(:root) {
		--font-family: 'Roboto', sans-serif;
	}
	:global(h1, h2, h3, h4, h5, h6, p, b, label, legend) {
		font-family: var(--font-family);
	}
</style>
