import { LoadingIcon } from '../components/LoadingIcon';
import { FunctionalMetadata } from '../components/Metadata/FunctionalMetadata';
import { sleep } from '../utils/time';
import { getAuth } from 'firebase/auth';
import Router from 'next/router';
import { useEffect } from 'react';

export default function SignOut() {
	useEffect(() => {
		(async () => {
			await getAuth().signOut();
			await sleep(0.25);

			Router.push('/');
		})();
	}, []);

	return (
		<>
			<FunctionalMetadata title="Mood Graph - Signing out..." />
			<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
				<main className="text-center">
					<h2 className="mb-2 font-display text-2xl font-extrabold">
						Signing out...
					</h2>
					<LoadingIcon />
				</main>
			</div>
		</>
	);
}
