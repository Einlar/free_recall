<script>
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

<div class="wrapper">
	<div class="main">
		<slot />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: #de6262 linear-gradient(to right, #ffb88c, #de6262);
	}

	.wrapper {
		margin: 0 auto;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1em;
		background: #f2f2f2;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
		width: 90%;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>
