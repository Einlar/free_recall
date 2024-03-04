import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		// Configure to deploy on Netlify
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			$gql: 'src/lib/graphql/gql',
			$gqlTypes: 'src/lib/graphql/gql/graphql.ts',
			$queries: 'src/lib/graphql/queries',
			$mutations: 'src/lib/graphql/mutations'
		}
	}
};

export default config;
