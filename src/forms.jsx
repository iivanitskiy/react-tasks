import { useAuth } from './hooks/useAuth';
import { useState } from 'react';

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
			{!isAuthenticated && <form onSubmit={handleSubmit}>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					required
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					required
				/>
				<button type="submit">Войти</button>
			</form>}
			{isAuthenticated && <button onClick={logout}>Выйти</button>}
		</>
	)
}

export default Forms