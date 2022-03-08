import { LoadingIcon } from '../components/LoadingIcon';
import { getAuth } from 'firebase/auth';
import Router from 'next/router';
import { useEffect } from 'react';

export default function SignOut() {
	useEffect(() => {
		getAuth()
			.signOut()
			.then(() => {
				setTimeout(() => {
					Router.push('/');
				}, 500);
			});
	});

	return (
		<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
			<main className="text-center">
				<h2 className="mb-2 font-display text-2xl font-extrabold">
					Signing out...
				</h2>
				<LoadingIcon />
			</main>
		</div>
	);
}
