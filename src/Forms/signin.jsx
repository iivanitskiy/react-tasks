import { useState } from "react"

function SignIn({ onSubmit }) {
	const [inputs, setInputs] = useState({})

	const handleChange = (event) => {
		setInputs(prevstate => ({
			...prevstate, [event.target.name]: event.target.value
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(inputs);
	}

	return (
		<>
			<form
				onChange={handleChange}
				onSubmit={handleSubmit}
			>
				<input type="email" placeholder="email" name="email"></input>
				<input type="password" placeholder="password" name="password"></input>
				<button type="submit">Войти</button>
			</form>
		</>
	)
}

export default SignIn