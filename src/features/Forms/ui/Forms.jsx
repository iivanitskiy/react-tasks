import { useAuth } from '../../../features/auth/lib/useAuth';
import { useState } from 'react';
import { Button, Input } from '@mantine/core';

export function Forms() {
	const { isAuthenticated, login, logout } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<>
			{!isAuthenticated && <form onSubmit={handleSubmit} style={{ width: '250px'}}>
				<Input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					required
					mb="10px"
				/>
				<Input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					required
					mb="10px"
				/>
				<Button type="submit">Войти</Button>
			</form>}
			{isAuthenticated && <Button onClick={logout}>Выйти</Button>}
		</>
	)
}

export default Forms