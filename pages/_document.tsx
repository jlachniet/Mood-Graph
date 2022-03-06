import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-US" prefix="og: https://ogp.me/ns#" className="h-full">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="h-full">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
