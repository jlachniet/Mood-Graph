import Head from 'next/head';

export default function Offline() {
	return (
		<>
			<Head>
				<title>Offline</title>
			</Head>
			<div className="flex h-screen items-center justify-center text-center font-display">
				<main className="m-4">
					<h1 className="mb-2 text-2xl font-extrabold">
						You are currently offline.
					</h1>
					<h2 className="text-4xl">😔</h2>
				</main>
			</div>
		</>
	);
}
