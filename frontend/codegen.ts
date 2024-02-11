import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: './schema.graphql',
	documents: ['./src/**/*.svelte', './src/**/*.js', './src/**/*.ts'],
	emitLegacyCommonJSImports: false,
	generates: {
		'./src/lib/graphql/gql/': {
			preset: 'client',
			config: {
				useTypeImports: true // The updated setting.
			}
		}
	}
};

export default config;
