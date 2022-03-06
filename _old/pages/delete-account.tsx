import LoadingHeart from '../components/LoadingHeart';
import { MoodGraphHead } from '../components/MoodGraphHead';
import { Navbar } from '../components/Navbar';
import {
	useAuthenticatedRoute,
	useDefaultAuthState,
} from '../utils/hooks/firebase';
import router from 'next/router';

export default function DeleteAccount() {
	useAuthenticatedRoute();

	const [user] = useDefaultAuthState();

	async function deleteAccount() {
		if (user) {
			fetch('/api/delete-account', {
				method: 'POST',
				body: JSON.stringify({ firebaseToken: await user.getIdToken(true) }),
			});

			router.push('/sign-out');
		}
	}

	return (
		<>
			<MoodGraphHead
				title="Mood Graph - Delete Account"
				url="/delete-account"
			/>
			<Navbar />
			<main className="p-4">
				<h1 className="mb-2 font-display text-2xl font-extrabold">
					Delete Account
				</h1>
				{user ? (
					<>
						<p className="mb-8">
							<strong className="text-red-600">Warning: </strong>
							By pressing the following button, your account and all of its data
							will be deleted permanently!
						</p>
						<button
							className="rounded bg-red-600 px-2 py-1 font-bold uppercase shadow-lg hover:bg-red-400"
							onClick={deleteAccount}
						>
							Delete Account
						</button>
					</>
				) : (
					<LoadingHeart />
				)}
			</main>
		</>
	);
}
