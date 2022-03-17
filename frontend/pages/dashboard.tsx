import { MoodGraphHead } from '../components/MoodGraphHead';
import { Navbar } from '../components/Navbar';
import { MoodTracker } from '../components/dashboard/MoodTracker';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';

export default function Home() {
	useAuthenticatedRoute();

	return (
		<>
			<MoodGraphHead title="Mood Graph - Dashboard" url="/dashboard" />
			<Navbar />
			<div className="flex h-[calc(100vh-2.5rem)] items-center justify-center text-center">
				<main className="max-h-full w-full overflow-auto pb-4">
					<MoodTracker />
				</main>
			</div>
		</>
	);
}
