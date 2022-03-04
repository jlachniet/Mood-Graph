import LoadingHeart from '../components/LoadingHeart';
import { MoodGraphHead } from '../components/MoodGraphHead';
import { getAuth } from 'firebase/auth';
import router from 'next/router';
import { useEffect } from 'react';

export default function SignOut() {
	useEffect(() => {
		getAuth()
			.signOut()
			.then(() => {
				setTimeout(() => {
					router.push('/');
				}, 500);
			});
	});

	return (
		<>
			<MoodGraphHead title="Mood Graph - Sign Out" url="/sign-out" />
			<div className="flex h-screen items-center justify-center text-center">
				<main>
					<h1 className="text-2xl font-bold">Signing out...</h1>
					<LoadingHeart />
				</main>
			</div>
		</>
	);
}
