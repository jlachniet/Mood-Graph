import '../styles/globals.css';
import { initializeFirebase } from '../utils/firebase';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const DynamicNextNProgress = dynamic(() => import('nextjs-progressbar'));

export default function MyApp({ Component, pageProps }: AppProps) {
	initializeFirebase();

	return (
		<div className="h-full bg-neutral-200">
			<DynamicNextNProgress
				color="#8c55ff"
				height={1}
				options={{
					showSpinner: false,
				}}
			/>
			<Component {...pageProps} />
		</div>
	);
}
