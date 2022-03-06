import { useEffect, useState } from 'react';

export function useWindowSize(): [number, number] {
	const [width, setWidth] = useState(globalThis.window?.innerWidth ?? 1920);
	const [height, setHeight] = useState(globalThis.window?.innerHeight ?? 1080);

	useEffect(() => {
		function updateSize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}

		window.addEventListener('resize', updateSize);
		updateSize();

		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return [width, height];
}
