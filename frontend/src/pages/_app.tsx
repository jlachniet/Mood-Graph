import { Navbar } from '../components/Navbar/Navbar';
import '../styles/globals.css';
import { Theme } from '../types/theme';
import { initializeFirebase } from '../utils/firebase';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<[Theme, (theme: Theme) => void]>([
	'dark',
	() => {
		return;
	},
]);

const DynamicNextNProgress = dynamic(() => import('nextjs-progressbar'));

export default function MyApp({ Component, pageProps }: AppProps) {
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

	initializeFirebase();

	return (
		<ThemeContext.Provider value={[theme, setSyncedTheme]}>
			<div className="min-h-full">
				<DynamicNextNProgress
					color="#8c55ff"
					height={1}
					options={{
						showSpinner: false,
					}}
				/>
				<Navbar />
				<Component {...pageProps} />
			</div>
		</ThemeContext.Provider>
	);
}
