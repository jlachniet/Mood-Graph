import { Theme } from '../../types/theme';
import { useEffect, useState } from 'react';

export function useTheme(): [Theme, (theme: Theme) => void] {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		setSyncedTheme(
			localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
		);
	}, []);

	function setSyncedTheme(theme: Theme) {
		localStorage.setItem('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
		setTheme(theme);
	}

	return [theme, setSyncedTheme];
}
