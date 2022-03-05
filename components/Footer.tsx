import Link from 'next/link';

export function Footer() {
	return (
		<footer className="bg-neutral-900 px-3 py-1 text-center shadow-lg shadow-black sm:text-left">
			<ul>
				<li className="inline-block">Made with ❤ by Julian</li>
				<li className="mx-2 inline-block text-neutral-300" aria-hidden>
					•
				</li>
				<li className="inline-block">
					<Link href="https://github.com/jlachniet/Mood-Graph">
						<a className="text-blue-400">GitHub</a>
					</Link>
				</li>
			</ul>
		</footer>
	);
}
