import Head from 'next/head';
import { BsWifiOff } from 'react-icons/bs';

export default function Offline() {
	return (
		<>
			<Head>
				<title>Offline</title>

				<meta name="color-scheme" content="light" />
				<meta name="theme-color" content="#fafafa" />

				<link rel="icon" href="/icons/icon-32x32.png" sizes="32x32" />
				<link rel="icon" href="/icons/icon-192x192.png" sizes="192x192" />
				<link rel="icon" href="/icons/icon-16x16.png" sizes="16x16" />
				<link
					rel="apple-touch-icon"
					href="/apple-touch-icon.png"
					sizes="180x180"
				/>
				<link
					rel="mask-icon"
					href="/icons/safari-pinned-tab.svg"
					color="#8b5cf6"
				/>

				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
				<main>
					<div className="mx-auto mb-2 flex w-fit items-center">
						<h1 className="mr-3 font-display text-3xl font-extrabold">
							Offline
						</h1>
						<BsWifiOff className="h-12 w-12" />
					</div>
					<h2>Your device is currently offline.</h2>
				</main>
			</div>
		</>
	);
}
