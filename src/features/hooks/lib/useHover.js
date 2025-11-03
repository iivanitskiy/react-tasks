import { useState, useRef, useEffect } from 'react';

export const useHover = () => {
	const [hovered, setHovered] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener('mouseenter', () => setHovered(true));
			ref.current.addEventListener('mouseleave', () => setHovered(false));
		}
	}, []);

	return { hovered, ref };
}