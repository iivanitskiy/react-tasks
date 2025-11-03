import { useEffect, useState } from 'react';

export function useWindowEvent(type, listener, options) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(type, listener, options);
			return () => window.removeEventListener(type, listener, options);
		}
	}, [type, listener]);
}

export const useViewportSize = () => {
	const [size, setSize] = useState({ width: 0, height: 0 });

	useWindowEvent('resize', () => {
		setSize({ width: window.innerWidth, height: window.innerHeight });
	}, { passive: true });

	return size;
}