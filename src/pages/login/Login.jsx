import { Container, Title } from '@mantine/core';
import '../../pages/styles/Styles.css'
import { Forms } from '../../features/Forms/ui/Forms'

function Login() {

	return (
		<Container style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<Title order={1}>Логин</Title>
			<Forms />
		</Container>
	)
}

export default Login