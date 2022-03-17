import { useEffect, useState } from 'react';

export function useWindowSize() {
	const [windowWidth, setWindowWidth] = useState(
		globalThis.window?.innerWidth ?? 1920
	);
	const [windowHeight, setWindowHeight] = useState(
		globalThis.window?.innerHeight ?? 1080
	);

	useEffect(() => {
		function updateSize() {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);
		}

		updateSize();

		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return { windowWidth, windowHeight };
}
