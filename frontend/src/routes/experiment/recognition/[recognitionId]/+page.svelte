<script>
	import Loader from '$lib/components/Loader.svelte';
	import Presenter from '$lib/components/Presenter.svelte';
	import { COMPLETE_RECOGNITION } from '$mutations';
	import { getContextClient, mutationStore } from '@urql/svelte';

	/** @type {import("./$types").PageData} */
	export let data;

	/**
	 * @type {"explain" | "present" | "recognition" | "end"}
	 * Experiment stage
	 */
	let experimentState = 'explain';

	/**
	 * @type {Date}
	 * Time when the recognition phase started
	 */
	let recognitionStartTime;

	const startPresenting = () => {
		experimentState = 'present';
	};

	const startRecognition = () => {
		experimentState = 'recognition';
		recognitionStartTime = new Date();
	};

	/**
	 * Shuffle two arrays in place using the Durstenfeld shuffle algorithm
	 * See: https://stackoverflow.com/a/12646864
	 *
	 * @template T
	 * @param {Array<T>} array1
	 * @param {Array<T>} array2
	 */
	function shuffleArrays(array1, array2) {
		if (array1.length !== array2.length) {
			throw new Error('Arrays must have the same length');
		}

		for (let i = array1.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array1[i], array1[j]] = [array1[j], array1[i]];
			[array2[i], array2[j]] = [array2[j], array2[i]];
		}
	}

	/**
	 * @typedef {Object} WordRecognized
	 * @property {Number} time Time of the recognition, wrt start of the recognition phase (ms)
	 * @property {String} answer The recognized word chosen by the subject
	 * @property {String} trueWord The correct word between the two presented
	 * @property {String} falseWord The distractor word between the two presented
	 * @property {Boolean} topIsTrue True if the correct word was presented above the distractor, false otherwise
	 */

	/**
	 * @type {WordRecognized[]}
	 */
	let recognizedWords = [];

	/**
	 * Prepare the data for the recognition phase
	 */
	const recognitionWords = [...data.words];
	const distractorWords = [...data.distractors];
	shuffleArrays(recognitionWords, distractorWords);
	const topIsTrue = Array.from({ length: recognitionWords.length }, () => Math.random() < 0.5);

	/**
	 * @type {Number}
	 */
	let index = 0;

	$: wordTop = topIsTrue[index] ? recognitionWords[index] : distractorWords[index];
	$: wordBottom = topIsTrue[index] ? distractorWords[index] : recognitionWords[index];

	const client = getContextClient();

	/** @type {import('./types').Result<COMPLETE_RECOGNITION>} */
	let result;

	const submitRecognition = () => {
		result = mutationStore({
			client,
			query: COMPLETE_RECOGNITION,
			variables: {
				id: data.id,
				answers: recognizedWords,
				completedAt: new Date()
			}
		});
	};

	/**
	 * Record the recognized word
	 *
	 * @param {String} word
	 */
	const recognizeWord = (word) => {
		const time = new Date().getTime() - recognitionStartTime.getTime();
		recognizedWords.push({
			time,
			answer: word,
			trueWord: recognitionWords[index],
			falseWord: distractorWords[index],
			topIsTrue: topIsTrue[index]
		});
		index++;
		if (index === recognitionWords.length) {
			submitRecognition();
		}
	};
</script>

{#if experimentState === 'explain'}
	<div class="space-y-3 text-justify">
		<p>
			In questo esperimento è richiesta la tua <b>piena attenzione</b> per circa <b>5 minuti</b>,
			perciò scegli un ambiente <b>privo di distrazioni</b>.
		</p>
		<ul class="ml-6 list-disc">
			<li>
				<p>
					Una volta iniziato l'esperimento, ti sarà mostrata una <b>serie di parole</b>, una dopo
					l'altra.
				</p>
			</li>
		</ul>
		<p>
			Cerca di ricordarne il <b>maggior numero possibile!</b>
		</p>
		<ul class="ml-6 list-disc">
			<li>
				<p>
					<b>Dopo</b> la presentazione, ti saranno mostrate delle <b>coppie di parole</b>. In ogni
					coppia, una parola è presa dalla lista che hai appena visto, mentre l'altra non c'entra
					nulla.
				</p>
				<p>
					Fai sempre <b>click</b> sulla <b>parola più familiare</b>, quella che pensi di aver
					<b>già visto</b> nella lista appena presentata.
				</p>
			</li>
		</ul>

		<p class="text-red-500">
			<b>Nota:</b>
			Questo compito è <b>molto difficile</b>: le parole sono <b>tante</b> e il tempo è poco! Perciò
			qualche volta può capitare di dover tirare a indovinare.
		</p>
		<p>
			<b>Nota:</b> Eseguendo l'esperimento da telefono, è consigliato orientare lo schermo orizzontalmente.
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
	<Presenter words={data.words} on:ended={() => startRecognition()} />
{:else if !$result}
	<div class="m-3 flex flex-col items-center space-y-4">
		<input
			type="button"
			on:click={() => recognizeWord(wordTop)}
			value={wordTop}
			class="my-4 w-full border-0 bg-amber-200 px-2 py-4 text-center font-mono text-4xl font-normal text-gray-700 shadow-md hover:bg-amber-300"
		/>
		<input
			type="button"
			on:click={() => recognizeWord(wordBottom)}
			value={wordBottom}
			class="my-4 w-full border-0 bg-amber-200 px-2 py-4 text-center font-mono text-4xl font-normal text-gray-700 shadow-md hover:bg-amber-300"
		/>
	</div>
{:else if $result.fetching}
	<!-- Recognition phase - Uploading results -->
	<div class="flex flex-col items-center">
		<p class="text-justify">Caricamento dei risultati in corso...</p>
		<Loader />
	</div>
{:else if $result.error}
	<div class="text-red-500">Qualcosa è andato storto. Si prega di riprovare più tardi.</div>
{:else if $result.data}
	<div class="text-green-500">
		Esperimento completato con successo! Puoi chiudere questa pagina.
	</div>
{/if}
