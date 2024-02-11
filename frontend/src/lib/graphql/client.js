import { Client, cacheExchange, fetchExchange } from '@urql/svelte';
import { authExchange } from '@urql/exchange-auth';

/**
 * @typedef {Object} JWT
 * @property {String} accessToken
 * @property {String|null} refreshToken
 */

/**
 * Refresh the JWT manually
 *
 * @param {Object} params
 * @param {String} params.refreshEndpoint
 * @param {String} params.refreshToken
 */
const refreshJwt = async ({ refreshEndpoint, refreshToken }) => {
	const result = await fetch(refreshEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ refreshToken })
	});

	if (result.ok) {
		return result.json();
	}

	return Promise.reject(result.statusText);
};

/**
 * Handle authentication for urql
 *
 * @param {Object} params
 * @param {String} params.refreshEndpoint
 * @param {JWT} [params.token]
 */
const createAuthExchange = ({ refreshEndpoint, token }) => {
	return authExchange(async (utilities) => {
		return {
			addAuthToOperation(operation) {
				return utilities.appendHeaders(
					operation,
					token?.accessToken
						? {
								Authorization: `Bearer ${token.accessToken}`
							}
						: {
								role: 'public'
							}
				);
			},
			didAuthError(error) {
				return error.graphQLErrors.some((e) => e.extensions?.code === 'invalid-jwt');
			},
			async refreshAuth() {
				if (token?.refreshToken) {
					await refreshJwt({ refreshEndpoint, refreshToken: token.refreshToken });
				}
			}
		};
	});
};

/**
 *
 * @param {Object} params
 * @param {String} params.gqlEndpoint GraphQL Endpoint URL
 * @param {String} params.refreshEndpoint Endpoint for refreshing the JWT
 * @param {JWT} [params.token]
 *
 * @returns {import('@urql/svelte').Client}
 */
export const createClient = ({ gqlEndpoint, refreshEndpoint, token }) => {
	return new Client({
		url: gqlEndpoint,
		exchanges: [cacheExchange, createAuthExchange({ token, refreshEndpoint }), fetchExchange]
	});
};
