<script>
	/** @type {import('./$types').ActionData}*/
	export let form;

	form?.success;
</script>

{#if form}
	{#if form.success}
		<p>Riceverai a breve una mail all'indirizzo {form.email} con il link necessario ad accedere.</p>
	{:else}
		<p>Qualcosa è andato storto. Riprova più tardi.</p>
	{/if}
{:else}
	<div class="mx-auto w-full max-w-md">
		<div class="pb-4">
			<p>Inserisci il tuo indirizzo e-mail per accedere all'esperimento.</p>
		</div>
		<form action="?/signin" method="post" class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
			<div class="mb-4">
				<label class="mb-2 block text-sm font-bold text-gray-700" for="email">
					Indirizzo E-mail
				</label>
				<input
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					id="email"
					type="email"
					name="email"
					placeholder="example@example.com"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
					type="submit"
				>
					Sign In
				</button>
			</div>
		</form>
	</div>
{/if}
