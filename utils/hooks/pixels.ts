import { Pixel, PixelUpdater, PixelValue } from '../../types/pixels';
import {
	useAuthenticatedCollectionData,
	useDefaultAuthState,
} from './firebase';
import {
	collection,
	deleteDoc,
	doc,
	getFirestore,
	setDoc,
} from 'firebase/firestore';

/**
 * A custom hook that returns a object containing the current user's pixels or
 * null if they aren't available, and a function to update a pixel.
 * @returns The hook
 */
export function usePixels() {
	const [user] = useDefaultAuthState();
	const pixels =
		useAuthenticatedCollectionData<Pixel>((user) =>
			collection(getFirestore(), 'users', user.uid, 'pixels')
		)[0] ?? null;

	function updatePixel(dateString: string, value: PixelValue | null) {
		if (user) {
			if (value) {
				setDoc(doc(getFirestore(), `/users/${user.uid}/pixels/${dateString}`), {
					dateString,
					value,
				});
			} else {
				deleteDoc(
					doc(getFirestore(), `/users/${user.uid}/pixels/${dateString}`)
				);
			}
		}
	}

	return { pixels, updatePixel };
}
