<script>
	import { enhance } from '$app/forms';
	import Loader from '$lib/components/Loader.svelte';

	/** @type {import("./$types").ActionData} */
	export let form;

	/**
	 * @type {boolean}
	 * Flag to show the loading spinner when the form is submitted
	 */
	let formLoading = false;
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="mb-6 text-3xl font-bold">Inizia l'Esperimento!</h1>
	<p class="mb-6 text-center text-lg">
		Inserisci il codice numerico che ti è stato fornito per accedere all'esperimento:
	</p>

	<form
		method="post"
		action="?/selectExperiment"
		class="w-full"
		use:enhance={() => {
			formLoading = true;
			return async ({ update }) => {
				formLoading = false;
				update();
			};
		}}
	>
		<div class="flex flex-col">
			<input
				type="number"
				class="mb-6 mr-2 w-full rounded-md border border-gray-300 px-4 py-2"
				placeholder="Codice di accesso"
				name="runCode"
				disabled={formLoading}
			/>
			<button
				class="m-auto rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				type="submit"
				disabled={formLoading}
			>
				Conferma
			</button>
		</div>
	</form>
	{#if formLoading}
		<Loader />
	{/if}

	{#if form?.error}
		<div
			class="relative mt-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
			role="alert"
		>
			<span class="block sm:inline">
				{#if form.message == 'graphql-error'}
					Qualcosa è andato storto, riprova più tardi.
				{:else if form.message == 'run-not-found'}
					Non esiste alcun esperimento con questo codice.
				{/if}
			</span>
		</div>
	{/if}
</div>
