import { Theme } from '../types/theme';
import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<{
	theme: Theme;
	setTheme: (theme: Theme) => void;
}>({
	theme: 'dark',
	setTheme: () => {
		return;
	},
});

export function useThemeState() {
	function setSyncedTheme(theme: Theme) {
		localStorage.setItem('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
		setTheme(theme);
	}

	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		setTimeout(() =>
			setSyncedTheme(
				localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
			)
		);
	}, []);

	return { theme, setTheme: setSyncedTheme };
}

export function useThemeContext() {
	return useContext(ThemeContext);
}
