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

	return <p>Signing out...</p>;
}
