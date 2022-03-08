import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata';
import { useDefaultAuthState } from '../utils/hooks/firebase';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function Login() {
	const [user] = useDefaultAuthState();

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
			<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
				<main className="mx-3 h-[9.5rem] w-72 rounded-md bg-neutral-50 px-6 py-7 text-center shadow">
					<h1 className="font-display text-4xl font-extrabold">Login</h1>
					{!user && (
						<StyledFirebaseAuth
							className="-mb-4"
							firebaseAuth={getAuth()}
							uiConfig={{
								signInFlow: 'popup',
								signInOptions: [GoogleAuthProvider.PROVIDER_ID],
								callbacks: {
									signInSuccessWithAuthResult: () => false,
								},
							}}
						/>
					)}
				</main>
			</div>
		</>
	);
}
