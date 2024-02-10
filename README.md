# Free Recall

Web app to gather data for free recall experiments. Made with [SvelteKit](https://kit.svelte.dev/) and [NHost](https://nhost.io/).

## Local development

It is highly recommended to work in a Linux environment (if you use Windows, WSL works).

### Backend

The `backend` folder holds the database and server-side services.

1. Install the [Nhost CLI](https://github.com/nhost/cli?tab=readme-ov-file#get-started)
2. Inside `backend`, run `nhost up`.

### Frontend

The `frontend` folder holds the main user-facing web application.

1. Install [Node.js](https://nodejs.org/en), e.g. via [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).
2. Install the [pnpm](https://pnpm.io/installation) package manager.
3. Inside `frontend`, run `pnpm i` to install dependencies.
4. Run the app locally with `pnpm run dev`.
