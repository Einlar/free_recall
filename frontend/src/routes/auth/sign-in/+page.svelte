<main>
	<h1>Effettua il Log-In</h1>
	<p>
		Per accedere all'esperimento, effettua il log-in inserendo il tuo indirizzo e-mail. Riceverai un
		link di accesso per l'applicazione.
	</p>
	<form action="?/signin" method="post">
		<label for="email">Email:</label>
		<input type="email" id="email" name="email" required />
		<button type="submit">Sign Up</button>
	</form>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	label {
		font-weight: bold;
	}

	input {
		padding: 0.5rem;
		border-radius: 4px;
		border: 1px solid #ccc;
	}

	button {
		padding: 0.5rem 1rem;
		border-radius: 4px;
		background-color: #007bff;
		color: #fff;
		border: none;
		cursor: pointer;
	}
</style>
