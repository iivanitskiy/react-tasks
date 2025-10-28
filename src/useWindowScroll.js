import { useState, useEffect } from 'react';

export function useWindowEvent(type, listener, options) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(type, listener, options);
			return () => window.removeEventListener(type, listener, options);
		}
	}, [type, listener, options]);
}

export function useWindowScroll() {
	const [scroll, setScroll] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateScroll = () => {
			setScroll({
				x: window.scrollX,
				y: window.scrollY
			});
		};

		updateScroll();

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', updateScroll, { passive: true });
			return () => window.removeEventListener('scroll', updateScroll);
		}
	}, []);

	const scrollTo = (options) => {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				left: options.x,
				top: options.y,
			});
		}
	};

	return [scroll, scrollTo];
}

