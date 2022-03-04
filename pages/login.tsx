import LoginButton from '../components/LoginButton';
import { MoodGraphHead } from '../components/MoodGraphHead';
import { Navbar } from '../components/Navbar';
import { useDefaultAuthState } from '../utils/hooks/firebase';
import router from 'next/router';
import { useEffect } from 'react';

export default function Login() {
	const [user] = useDefaultAuthState();

	useEffect(() => {
		if (user) {
			if (router.query.next === 'prev') {
				router.back();
				return;
			}

			router.push('/dashboard');
		}
	}, [user]);

	return (
		<>
			<MoodGraphHead title="Mood Graph - Login" url="/login" />
			<Navbar />
			<div className="flex h-[calc(100vh-2.5rem)] items-center justify-center text-center font-display">
				<main className="m-4">
					<h1 className="mb-4 text-4xl font-extrabold">Login</h1>
					{!user && <LoginButton />}
				</main>
			</div>
		</>
	);
}
