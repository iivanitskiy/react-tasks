import { useState } from "react"
import { Button, Input } from '@mantine/core';

function Signin({ onSubmit }) {
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
				<Input type="email" placeholder="email" name="email"></Input>
				<Input type="password" placeholder="password" name="password"></Input>
				<Button type="submit">Войти</Button>
			</form>
		</>
	)
}

export default Signin