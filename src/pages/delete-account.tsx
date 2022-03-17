import { Button } from '../components/Form/Button';
import { LinkButton } from '../components/Form/LinkButton';
import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import {
	useAuthenticatedRoute,
	useDefaultAuthState,
} from '../utils/hooks/firebase';
import Router from 'next/router';

export default function DeleteAccount() {
	useAuthenticatedRoute();

	const { user } = useDefaultAuthState();

	async function deleteAccount() {
		if (user) {
			await fetch('/api/delete-account', {
				method: 'POST',
				body: JSON.stringify({ firebaseToken: await user.getIdToken(true) }),
			});

			Router.push('/sign-out');
		}
	}

	return (
		<>
			<Metadata title="Mood Graph - Delete Account" url="/delete-account" />
			<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
				{user ? (
					<main className="mx-3 max-w-md rounded-md bg-neutral-50 px-6 py-7 text-center shadow dark:bg-neutral-800">
						<h1 className="mb-4 font-display text-3xl font-extrabold">
							Delete Account
						</h1>
						<strong className="mb-2 block">
							Are you sure you want to delete your account?
						</strong>
						<p className="mb-4">
							Deleting your account will delete your data from our service
							permanently.{' '}
							<strong className="text-red-600 underline underline-offset-1">
								This action cannot be undone!
							</strong>
						</p>
						<LinkButton
							background="bg-neutral-500"
							color="text-neutral-100"
							href="/"
							className="mr-2"
						>
							Cancel
						</LinkButton>
						<Button
							onClick={deleteAccount}
							background="bg-red-500"
							color="text-neutral-100"
						>
							Delete Account
						</Button>
					</main>
				) : (
					<LoadingIcon />
				)}
			</div>
		</>
	);
}
