<script>
	import { onMount, createEventDispatcher } from 'svelte';

	/**
	 * @type {Number}
	 * Duration of the countdown in seconds
	 */
	export let duration = 60;

	/**
	 * @type {Number}
	 * Remaining minutes
	 */
	let minutes = Math.floor(duration / 60);

	/**
	 * @type {Number}
	 * Remaining seconds
	 */
	let seconds = duration % 60;

	const dispatch = createEventDispatcher();

	onMount(() => {
		const interval = setInterval(() => {
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(interval);
					dispatch('ended');
				} else {
					minutes -= 1;
					seconds = 59;
				}
			} else {
				seconds -= 1;
			}
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="mt-4 text-center font-sans text-3xl font-normal uppercase tracking-wider text-gray-700">
	{minutes.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	})}
	:
	{seconds.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	})}
</div>
