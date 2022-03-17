import { Blog } from '../components/Blog';
import { MoodGraphHead } from '../components/MoodGraphHead';
import { Navbar } from '../components/Navbar';
import { useDefaultAuthState } from '../utils/hooks/firebase';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const [user] = useDefaultAuthState();

	return (
		<>
			<MoodGraphHead title="Mood Graph" url="/" />
			<Navbar />
			<div className=" flex h-[calc(100vh-2.5rem)] items-center justify-center text-center font-display">
				<main className="m-4">
					<h1 className="mb-6 text-5xl font-extrabold">Mood Graph</h1>
					<div className="mb-4">
						<Image
							src="/icons/cropped/icon-96w.svg"
							width={96}
							height={84}
							alt=""
						/>
					</div>
					<h2 className="mb-4 text-lg font-semibold">
						A simple way to track your mental&nbsp;health.
					</h2>
					<Link href={user ? '/dashboard' : '/login'}>
						<a className="inline-block whitespace-nowrap rounded-full bg-primary px-4 py-3 font-extrabold uppercase transition-all duration-75 hover:scale-105 hover:bg-primary-light">
							{user ? 'Go to Dashboard' : 'Get Started'}
						</a>
					</Link>
				</main>
			</div>
			<Blog
				blogEntries={[
					{
						title: 'Welcome to Mood Graph!',
						date: 'Mar 4th 2022',
						content: (
							<>
								Hello! Mood Graph is a daily mood tracking web application
								created by Julian Lachniet built with Next.js and Firebase.
							</>
						),
					},
				]}
				changelogEntries={[
					{
						version: 'Release 1.0.0',
						date: 'Mar 4th 2022',
						changes: [
							<>Initial production release and first open source release.</>,
						],
					},
				]}
			/>
			<Link href="/privacy-policy">
				<a className="mr-2 block pb-2 text-right text-blue-600">
					Privacy Policy
				</a>
			</Link>
			<Link href="/delete-account">
				<a className="mr-2 block pb-2 text-right text-blue-600">
					Delete Account
				</a>
			</Link>
		</>
	);
}
