import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-US" prefix="og: https://ogp.me/ns#" className="min-h-full">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@600;800&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="min-h-full bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
