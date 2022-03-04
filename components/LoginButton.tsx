import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function LoginButton() {
	return (
		<StyledFirebaseAuth
			className="mb-[-1rem]"
			firebaseAuth={getAuth()}
			uiConfig={{
				signInFlow: 'popup',
				signInOptions: [GoogleAuthProvider.PROVIDER_ID],
				callbacks: {
					signInSuccessWithAuthResult: () => {
						return false;
					},
				},
			}}
		/>
	);
}
