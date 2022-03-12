import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import GoogleLogo from '../public/images/google-logo.svg';
import { useDefaultAuthState } from '../utils/hooks/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Router from 'next/router';
import { useEffect } from 'react';

export default function Login() {
	const { user, loading } = useDefaultAuthState();

	useEffect(() => {
		if (user) {
			if (Router.query.next === 'prev') {
				Router.back();
			} else {
				Router.push('/dashboard');
			}
		}
	}, [user]);

	return (
		<>
			<Metadata title="Mood Graph - Login" url="/" />
			<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
				{loading || user ? (
					<LoadingIcon />
				) : (
					<main className="mx-3 w-72 rounded-md bg-neutral-50 px-6 py-7 text-center shadow">
						<h1 className="mb-4 font-display text-3xl font-extrabold">Login</h1>
						<button
							className="rounded-full bg-violet-600 px-3 py-2 font-display text-sm font-semibold text-neutral-100"
							onClick={() =>
								signInWithPopup(getAuth(), new GoogleAuthProvider())
							}
						>
							<GoogleLogo className="mr-2 inline-block" />
							Sign in with Google
						</button>
					</main>
				)}
			</div>
		</>
	);
}
