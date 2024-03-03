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

<div class="space-y-2">
	<p>Benvenuto/a all'esperimento!</p>
	<p>Inserisci il codice per accedere:</p>
</div>

<div class="flex flex-col">
	<div class="flex items-center">
		<form
			method="post"
			action="?/selectExperiment"
			use:enhance={() => {
				formLoading = true;
				return async ({ update }) => {
					formLoading = false;
					update();
				};
			}}
		>
			<input
				type="number"
				class="mr-2 rounded-md border border-gray-300 px-4 py-2"
				placeholder="Codice di accesso"
				name="runCode"
				disabled={formLoading}
			/>
			<button
				class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				type="submit"
				disabled={formLoading}
			>
				Conferma
			</button>
		</form>
	</div>
	{#if formLoading}
		<Loader />
	{/if}
</div>

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
