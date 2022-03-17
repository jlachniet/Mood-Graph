import Logo from '../../public/icons/icon-responsive.svg';
import { LinkPill } from '../components/Form/LinkPill';
import { Metadata } from '../components/Metadata/Metadata';
import { PoweredByIcon } from '../components/PoweredByIcon';
import { UpdateCard } from '../components/UpdateCard';
import { useDefaultAuthState } from '../utils/hooks/firebase';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { SiFirebase, SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si';

export default function Home() {
	const { user } = useDefaultAuthState();

	return (
		<>
			<Metadata title="Mood Graph - Home" url="/" />
			<div className="-mb-16 flex h-screenheightminusdoublenavbar items-center justify-center">
				<header className="mx-3 rounded-md bg-neutral-50 px-6 py-7 text-center shadow dark:bg-neutral-800">
					<h1 className="mb-3 font-display text-4xl font-extrabold">
						Mood Graph
					</h1>
					<div className="mb-2">
						<Logo width={96} height={96} className="inline-block" alt="" />
					</div>
					<h2 className="mb-6 font-display font-semibold">
						A simple way to track your mental health.
					</h2>
					<div>
						{user ? (
							<LinkPill href="/dashboard" color="bg-violet-500">
								Go to Dashboard
							</LinkPill>
						) : (
							<LinkPill href="/login" color="bg-violet-500">
								Get Started
							</LinkPill>
						)}
						<LinkPill href="#about" color="bg-sky-500">
							Learn More
						</LinkPill>
					</div>
				</header>
			</div>
			<div className="mx-auto mb-4 max-w-screen-md rounded-t-2xl bg-neutral-50 shadow-sm shadow-neutral-800/50 dark:bg-neutral-800 md:rounded-t-lg">
				<main id="about" className="px-5 py-4">
					<h2 className="mb-3 font-display text-4xl font-extrabold">Hello!</h2>
					<p className="mb-4">
						Welcome to <strong>Mood Graph</strong>, a mood tracking web and
						Android app built by Julian Lachniet using Next.js and Firebase.
						This entire project is open source and available on{' '}
						<Link href="https://github.com/jlachniet/Mood-Graph">
							<a className="text-blue-600 dark:text-blue-500">GitHub</a>
						</Link>
						, and is deployed through Vercel.
					</p>
					<div className="mx-auto mb-4 w-fit rounded-md bg-neutral-200 px-4 py-3 shadow-sm shadow-black/50 transition-transform hover:scale-101 dark:bg-neutral-700">
						<h2 className="font-display font-semibold">How it works:</h2>
						<ol className="ml-4 list-decimal">
							<li>Set up daily reminders on your device</li>
							<li>Every night, rate your day from 1 to 5</li>
							<li>Track your mood over time</li>
						</ol>
					</div>
					<p className="mb-4 border-b border-neutral-500 pb-4">
						Interested? Start keeping track of your mental health by{' '}
						<Link href="/login">
							<a className="text-blue-600 dark:text-blue-500">
								getting started!
							</a>
						</Link>{' '}
						Not convinced yet? Keep reading to learn more about the project.
					</p>
					<div className="mb-4 border-b border-neutral-500 pb-4">
						<h2 className="mb-1 font-display text-2xl font-extrabold">
							Features:
						</h2>
						<ol className="ml-6 list-disc">
							<li>
								Works both online and offline as a web app and Android app.
							</li>
							<li>
								Your data is securely backed up and synced across devices.
							</li>
							<li>Completely free of charge!</li>
							<li>You can generate graph or stats about your moods.</li>
						</ol>
					</div>
					<h2 className="mb-3 font-display text-2xl font-extrabold">
						Updates:
					</h2>
					<ul className="mb-8 space-y-4">
						<UpdateCard
							versionNumber="1.1.2"
							releaseNotes={[
								'Fixed an addition bug with theming.',
								'Removed tooltips from the graph.',
							]}
							isLatest
						/>
						<UpdateCard
							versionNumber="1.1.1"
							releaseNotes={[
								'Fixed a bug with theming.',
								'Made a few small UI tweaks.',
							]}
						/>
						<UpdateCard
							versionNumber="1.1.0"
							releaseNotes={[
								'New UI design built from scratch, with dark and light modes.',
								'Added a setting to the graph page to switch the graph mode.',
								'Added additional information to the home page.',
								'Various tweaks, bug fixes, and performance improvements.',
							]}
						/>
						<UpdateCard
							versionNumber="1.0.0"
							releaseNotes={[
								'Initial production release and first open source release.',
							]}
						/>
					</ul>
					<h3 className="mb-1">Powered by:</h3>
					<ul className="space-x-2">
						<PoweredByIcon
							icon={SiNextdotjs}
							url="https://nextjs.org/"
							color="#000"
						/>
						<PoweredByIcon
							icon={SiFirebase}
							url="https://firebase.google.com/"
							color="#ffCA28"
						/>
						<PoweredByIcon
							icon={SiTypescript}
							url="https://www.typescriptlang.org/"
							color="#3178c6"
						/>
						<PoweredByIcon
							icon={SiReact}
							url="https://reactjs.org/"
							color="#61DAFB"
							brightness={0.9}
						/>
					</ul>
				</main>
				<div className="flex flex-col gap-2 px-3 py-2 text-right">
					<Link href="/privacy-policy">
						<a className="text-blue-600 dark:text-blue-500">Privacy Policy</a>
					</Link>
					<Link href="/delete-account">
						<a className="text-blue-600 dark:text-blue-500">Delete Account</a>
					</Link>
				</div>
				<footer className="bg-indigo-200 p-1 text-center dark:bg-indigo-900">
					Made with{' '}
					<BsHeartFill className="mb-0.5 inline h-3 w-3 fill-fuchsia-500 drop-shadow" />{' '}
					by Julian.
				</footer>
			</div>
		</>
	);
}
