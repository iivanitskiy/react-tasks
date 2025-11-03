import { useNavigate } from 'react-router-dom';
import { NavLink } from '@mantine/core';
function Navigation() {
	const navigate = useNavigate();

	const handleNavigation = (path) => {
		navigate(path);
	};

	return (
		<>
			<NavLink onClick={() => handleNavigation("/")} label="Home" />
			<NavLink onClick={() => handleNavigation("/hooks")} label="Hooks" />
			<NavLink onClick={() => handleNavigation("/characters")} label="Characters"/>
			<NavLink onClick={() => handleNavigation("/locations")} label="Locations" />
			<NavLink onClick={() => handleNavigation("/episodes")} label="Episodes" />
			<NavLink onClick={() => handleNavigation("/login")} label="Login" />
		</>
	)
}

export default Navigation
