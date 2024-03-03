<script>
	/** @type {import("./$types").PageData} */
	export let data;

	/** @type {import("./$types").ActionData} */
	export let form;

	let edit = !data.profile;

	/** @type {Record<import("$gqlTypes").Genders_Enum, String>} */
	const GENDER_MAP = {
		male: 'Uomo',
		female: 'Donna',
		other: 'Altro'
	};

	$: email = data.email;
	$: age = data.profile?.age ?? form?.profile?.age;
	$: gender = data.profile?.gender ?? form?.profile?.gender;

	$: console.log(form);
</script>

{#if !data.profile}
	<p>
		Questa è la prima volta che accedi a questa applicazione. Per favore, inserisci i seguenti dati:
	</p>
{/if}
{#if !edit && data.profile}
	<p>Conferma che le informazioni seguenti siano corrette:</p>
	<div class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
		<div class="mb-4">
			<label class="mb-2 block text-sm font-bold text-gray-700" for="currentAge"> E-mail </label>
			<div class="flex items-center">
				<span class="mr-2 font-medium text-gray-700" id="currentEmail"
					>{email ?? 'non specificato'}</span
				>
			</div>
		</div>
		<div class="mb-4">
			<label class="mb-2 block text-sm font-bold text-gray-700" for="currentAge"> Età </label>
			<div class="flex items-center">
				<span class="mr-2 font-medium text-gray-700" id="currentAge"
					>{age ?? 'non specificato'}</span
				>
			</div>
		</div>
		<div class="mb-4">
			<label class="mb-2 block text-sm font-bold text-gray-700" for="currentGender"> Genere </label>
			<div class="flex items-center">
				<span class="mr-2 font-medium text-gray-700" id="currentGender"
					>{gender ? GENDER_MAP[gender] : 'non specificato'}</span
				>
			</div>
		</div>
		<div class="flex items-center justify-center">
			<button
				class="font-medium text-blue-500 hover:text-blue-700 focus:outline-none"
				type="button"
				on:click={() => (edit = true)}
			>
				Modifica
			</button>
		</div>
	</div>

	<p>
		Se tutto è corretto, procedi alla <a href="/" class="text-blue-500 hover:text-blue-700"
			>Homepage</a
		>.
	</p>
{:else}
	<form
		action="?/updateProfile"
		method="post"
		class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
	>
		<div class="mb-4">
			<label class="mb-2 block text-sm font-bold text-gray-700" for="age"> Età </label>
			<input
				class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
				id="age"
				type="number"
				name="age"
				placeholder="Età"
				value={age}
			/>
		</div>
		<div class="mb-4">
			<fieldset>
				<legend class="mb-2 block text-sm font-bold text-gray-700">Genere</legend>
				<div class="flex items-center">
					<input
						type="radio"
						class="form-radio"
						id="male"
						name="gender"
						value="male"
						checked={gender === 'male'}
					/>
					<label for="male" class="ml-2">Uomo</label>
				</div>
				<div class="flex items-center">
					<input
						type="radio"
						class="form-radio"
						id="female"
						name="gender"
						value="female"
						checked={gender === 'female'}
					/>
					<label for="female" class="ml-2">Donna</label>
				</div>
				<div class="flex items-center">
					<input
						type="radio"
						class="form-radio"
						id="other"
						name="gender"
						value="other"
						checked={gender === 'other'}
					/>
					<label for="other" class="ml-2">Altro</label>
				</div>
			</fieldset>
		</div>
		<div class="flex items-center justify-between">
			<button
				class="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
				type="button"
				on:click={() => (edit = false)}
			>
				Annulla
			</button>
			<button
				class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				type="submit"
			>
				Conferma
			</button>
		</div>
	</form>
{/if}
