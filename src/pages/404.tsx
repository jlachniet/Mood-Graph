import { FunctionalMetadata } from '../components/Metadata/FunctionalMetadata';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { BsCaretLeftFill, BsSearch } from 'react-icons/bs';

export default function Error404() {
	const [path, setPath] = useState('');

	useEffect(() => {
		setPath(Router.asPath);
	}, []);

	return (
		<>
			<FunctionalMetadata title="Mood Graph - Error 404" />
			<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
				<main className="px-4 text-center">
					<div className="mx-auto mb-4 flex w-fit items-center">
						<h1 className="mr-3 font-display text-3xl font-extrabold">
							Error 404
						</h1>
						<BsSearch className="h-6 w-6" />
					</div>
					<h2 className="mb-6">
						The requested resource{' '}
						<div className="inline-block rounded bg-neutral-700 px-2 py-1 font-mono text-neutral-200">
							{path}
						</div>{' '}
						could not be found.
					</h2>
					<Link href="/">
						<a className="text-blue-600 dark:text-blue-500">
							<BsCaretLeftFill className="mb-1 mr-1 inline-block h-6 w-6" />
							Go to the home page.
						</a>
					</Link>
				</main>
			</div>
		</>
	);
}
