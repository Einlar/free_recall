<script>
	import Loader from '$lib/components/Loader.svelte';
	import Presenter from '$lib/components/Presenter.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { COMPLETE_RECALL } from '$mutations';

	import { mutationStore, getContextClient } from '@urql/svelte';

	/** @type {import("./$types").PageData} */
	export let data;

	/**
	 * @type {"explain" | "present" | "recall"}
	 * Experiment stage
	 */
	let experimentState = 'explain';

	/**
	 * @type {Date}
	 * Time of start of the recall phase
	 */
	let recallStart;

	const startPresenting = () => {
		experimentState = 'present';
	};

	const startRecall = () => {
		experimentState = 'recall';
		recallStart = new Date();
	};

	/**
	 * @typedef {Object} KeyPressed
	 * @property {String} key Pressed key
	 * @property {Number} time Time of the key press, wrt start of the recall phase (ms)
	 * @property {String} value The value of the input right before the key press
	 *
	 * @typedef {Object} WordRecalled
	 * @property {Number} start Input time of the first letter, wrt start of the recall phase (ms)
	 * @property {Number} end Input time of the last letter, wrt start of the recall phase (ms)
	 * @property {String} word Recalled word
	 * @property {KeyPressed[]} keys List of keys pressed
	 */

	/**
	 * @type {WordRecalled[]}
	 * List of words recalled
	 */
	let recalledWords = [];

	/**
	 * @type {WordRecalled}
	 */
	let recalledWord = {
		start: 0,
		end: 0,
		word: '',
		keys: []
	};

	/**
	 * @type {Number}
	 * Countdown duration
	 */
	const countdownDuration = Math.round(Math.log2(data.words.length / 4) * 90);

	/**
	 * @type {String}
	 * Input value
	 */
	let value = '';

	const client = getContextClient();

	/** @type {import('./types').Result<COMPLETE_RECALL>} */
	let result;

	const submitRecall = () => {
		// Commit the last word if any
		if (recalledWords.keys.length) {
			const now = new Date();
			recalledWord.end = now.getTime() - recallStart.getTime();
			recalledWord.word = value;
			recalledWords.push(recalledWord);
		}

		result = mutationStore({
			client,
			query: COMPLETE_RECALL,
			variables: {
				id: data.id,
				completedAt: new Date(),
				answers: recalledWords
			}
		});
	};
</script>

{#if experimentState === 'explain'}
	<div class="space-y-3 text-justify">
		<p>
			In questo esperimento è richiesta la tua <b>piena attenzione</b> per al massimo
			<b>7 minuti</b>, perciò scegli un ambiente <b>privo di distrazioni</b>.
		</p>

		<ul class="ml-6 list-disc">
			<li>
				<p>
					Una volta iniziato l'esperimento, ti sarà mostrata una <b>serie di parole</b>, una dopo
					l'altra.
				</p>
			</li>
		</ul>
		<!-- Add gif with presenter -->
		<p>Cerca di ricordarne il <b>maggior numero possibile!</b></p>

		<ul class="ml-6 list-disc">
			<li>
				<b>Dopo</b> la presentazione, ti sarà chiesto di <b>scrivere</b> le parole che
				<b>ricordi</b>, in un <b>ordine qualsiasi</b>, entro un tempo prefissato.
			</li>
		</ul>

		<!-- Add gif with recall -->

		<p class="text-red-500">
			Questo compito è <b>molto difficile</b>: le parole sono <b>tante</b> e il tempo è poco!
		</p>

		<p>
			Perciò non scoraggiarti se non riuscissi a ricordare tutto quanto. Puoi sempre terminare
			l'esperimento in anticipo, se ti accorgi di non ricordare più nulla.
		</p>

		<p>
			<b>Nota:</b> Eseguendo l'esperimento da telefono, è considerato orientare lo schermo orizzontalmente.
		</p>

		<div class="flex justify-center">
			<button
				class="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
				on:click={() => startPresenting()}
			>
				Inizia l'esperimento
			</button>
		</div>
	</div>
{:else if experimentState === 'present'}
	<Presenter words={data.words} on:ended={() => startRecall()} />
{:else if !$result}
	<!-- Recall Phase-->
	<div class="space-y-2 text-justify">
		<p>
			Scrivi tutte le parole che ricordi, in un <b>ordine qualsiasi</b>. Inserisci uno spazio o una
			virgola dopo ogni parola inserita.
		</p>
		<p>
			Se non ne ricordi altre, puoi concludere in anticipo facendo click su <i
				>Termina Esperimento</i
			>.
		</p>
	</div>
	<form autocomplete="off">
		<Timer duration={countdownDuration} on:ended={() => submitRecall()} />
		<input
			type="text"
			maxlength="40"
			spellcheck="false"
			class="my-8 w-full border-0 bg-blue-100 py-4 text-center font-mono text-4xl font-normal leading-6 text-gray-700 shadow-md outline-none"
			bind:value
			on:keydown={(e) => {
				const now = new Date();
				if ([',', ' ', 'Enter'].includes(e.key) && value.trim() !== '') {
					e.preventDefault();
					recalledWord.end = now.getTime() - recallStart.getTime();
					recalledWord.word = value;
					recalledWords.push(recalledWord);
					value = '';

					recalledWord = {
						start: 0,
						end: 0,
						word: '',
						keys: []
					};
				} else {
					if (!recalledWord.keys.length) {
						recalledWord.start = now.getTime() - recallStart.getTime();
					}
					recalledWord.keys.push({
						key: e.key,
						time: now.getTime() - recallStart.getTime(),
						value
					});
					recalledWord.word = value;
				}
			}}
		/>
		<!-- Prevent implicit submission of the form -->
		<button type="submit" disabled style="display: none" aria-hidden="true"></button>

		<div class="flex justify-center">
			<button
				type="submit"
				class="mt-4 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
				on:click|preventDefault={submitRecall}
			>
				Termina l'esperimento
			</button>
		</div>
	</form>
{:else if $result.fetching}
	<!-- Recall Phase - Uploading results -->
	<div class="flex flex-col items-center">
		<p class="text-center text-2xl">Caricamento dei risultati in corso...</p>
		<Loader />
	</div>
{:else if $result.error}
	<div class="text-center text-2xl text-red-500">
		Qualcosa è andato storto. Si prega di riprovare più tardi.
	</div>
{:else if $result.data}
	<div class="text-center text-2xl text-green-500">
		<p>Esperimento completato con successo!</p>
		<p>Puoi ora chiudere questa pagina.</p>
	</div>
{/if}
