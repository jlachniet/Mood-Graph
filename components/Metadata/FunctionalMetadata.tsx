import Head from 'next/head';

export function FunctionalMetadata(props: { title: string }) {
	return (
		<Head>
			<title>{props.title}</title>

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
	);
}
