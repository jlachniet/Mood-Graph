import { Navbar } from '../components/Navbar/Navbar';
import '../styles/globals.css';
import { initializeFirebase } from '../utils/firebase';
import { ThemeContext, useThemeState } from '../utils/hooks/theme';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const DynamicNextNProgress = dynamic(() => import('nextjs-progressbar'));

export default function MyApp({ Component, pageProps }: AppProps) {
	const { theme, setTheme } = useThemeState();

	initializeFirebase();

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
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
