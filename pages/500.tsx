import Head from 'next/head';
import Link from 'next/link';

export default function MoodGraph500() {
	return (
		<>
			<Head>
				<title>Error 500: Internal server error</title>
			</Head>
			<div className="flex h-screen items-center justify-center text-center font-display">
				<main className="m-4">
					<h1 className="mb-2 text-2xl">
						<strong>Error 500: </strong>
						Internal server error
					</h1>
					<h2 className="mb-3 text-4xl">😔</h2>
					<Link href="/">
						<a className="text-blue-200">Go to the home page.</a>
					</Link>
				</main>
			</div>
		</>
	);
}
