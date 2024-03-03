<script>
	import { onMount, createEventDispatcher } from 'svelte';

	/**
	 *  @type {String[]}
	 * List of words to present
	 */
	export let words;

	/**
	 * @type {Number}
	 * Number of milliseconds to show each word
	 */
	export let duration = 1000;

	/**
	 * @type {Number}
	 * Number of milliseconds to wait before showing the next word
	 */
	export let delay = 500;

	/**
	 * @type {Number}
	 * Index of the current word to show
	 */
	let index = 0;

	/**
	 * @type {Boolean}
	 * Flag to show the words
	 */
	let show = false;

	const dispatch = createEventDispatcher();

	onMount(() => {
		const interval = setInterval(() => {
			show = true;
			setTimeout(() => {
				show = false;
				index = (index + 1) % words.length;
				if (index === 0) {
					clearInterval(interval);
					dispatch('ended');
				}
			}, duration);
		}, duration + delay);

		return () => clearInterval(interval);
	});
</script>

<!-- @component
Present a list of words, showing them one at a time for just 1s.
-->

<div
	class="m-4 flex h-24 items-center justify-center bg-blue-50 p-2 text-center font-mono text-4xl font-normal text-gray-700"
>
	{#if show}
		{words[index]}
	{/if}
</div>
