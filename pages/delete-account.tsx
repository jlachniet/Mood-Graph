import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import {
	useAuthenticatedRoute,
	useDefaultAuthState,
} from '../utils/hooks/firebase';

export default function DeleteAccount() {
	useAuthenticatedRoute();

	const { user } = useDefaultAuthState();

	return (
		<>
			<Metadata title="Mood Graph - Delete Account" url="/delete-account" />
			{user ? (
				<p className="mx-4 my-2">Delete account</p>
			) : (
				<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
					<LoadingIcon />
				</div>
			)}
		</>
	);
}
