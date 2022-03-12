import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import {
	useAuthenticatedRoute,
	useDefaultAuthState,
} from '../utils/hooks/firebase';

export default function Graph() {
	useAuthenticatedRoute();

	const { user } = useDefaultAuthState();

	return (
		<>
			<Metadata title="Mood Graph - Graph" url="/graph" />
			{user ? (
				<p className="mx-4 my-2">Graph</p>
			) : (
				<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
					<LoadingIcon />
				</div>
			)}
		</>
	);
}
