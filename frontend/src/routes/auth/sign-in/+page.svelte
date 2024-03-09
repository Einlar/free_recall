<script>
	/** @type {import('./$types').ActionData}*/
	export let form;

	form?.success;
</script>

{#if form}
	<div class="mx-auto w-full">
		{#if form.success}
			<h1 class="mb-6 text-3xl font-bold">Mail inviata!</h1>
			<p class="text-lg">
				Riceverai a breve una mail all'indirizzo <span class=" text-blue-800">{form.email}</span> con
				il link necessario ad accedere.
			</p>
			<p class="text-lg">
				Nel caso non ricevessi la mail entro un minuto, riaggiorna la pagina e riprova.
			</p>
		{:else}
			<h1 class="mb-6 text-3xl font-bold text-red-700">Errore</h1>
			<p class="text-lg">Qualcosa è andato storto. Riprova più tardi.</p>
		{/if}
	</div>
{:else}
	<div class="mx-auto w-full">
		<div class="pb-4">
			<h1 class="mb-6 text-3xl font-bold">Free Recall</h1>
			<p class="mb-6">
				Da questa pagina è possibile accedere ad un test sulla memoria a breve termine.
			</p>
			<p class="mb-6">
				I dati raccolti saranno utilizzati esclusivamente per fini di ricerca scientifica, e saranno
				anonimizzati prima di ogni analisi.
			</p>
			<p class="mb-6">
				L'esperimento si svolgerà in due fasi, separate da un certo lasso di tempo. Poiché la
				seconda fase è correlata alla prima, è importante identificare correttamente i partecipanti.
				Per questo motivo, è richiesto inserire un indirizzo e-mail valido per accedere
				all'esperimento. Oltre a ciò, sararanno richieste alcune informazioni generiche (età e
				genere) necessarie per l'analisi dei dati.
			</p>
			<p>
				<strong>Importante</strong>: lo stesso indirizzo dovrà essere usato per accedere ad entrambe
				le fasi.
			</p>
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
					placeholder="example@email.com"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
					type="submit"
				>
					Accedi
				</button>
			</div>
		</form>
	</div>
{/if}
