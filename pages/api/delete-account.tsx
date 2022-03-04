import { MoodGraphProcess } from '../../types/environment';
import { isServiceAccount } from '../../types/guards/firebase';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { chunk } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';

declare const process: MoodGraphProcess;

/**
 * The /api/delete-account endpoint.
 *
 * Deletes the user's account and all associated data. The POST paramater
 * "firebaseToken" should be set to the user's Firebase auth token.
 * @param req The API request.
 * @param res The API response.
 */
export default async function deleteAccount(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const serviceAccount = JSON.parse(
		decodeURI(process.env.FIREBASE_SERVICE_ACCOUNT)
	);

	if (!isServiceAccount(serviceAccount)) {
		throw new Error('Invalid service account');
	}

	if (getApps().length === 0) {
		initializeApp({
			credential: cert(serviceAccount),
			databaseURL: 'https://mood-graph-336503-default-rtdb.firebaseio.com',
		});
	}

	try {
		const uid = (
			await getAuth().verifyIdToken(JSON.parse(req.body).firebaseToken)
		).uid;

		const pixelDocs = (
			await getFirestore().collection(`users/${uid}/pixels`).get()
		).docs;
		const pixelDocGroups = chunk(pixelDocs, 500);

		pixelDocGroups.forEach((pixelDocGroup) => {
			const pixelBatch = getFirestore().batch();

			pixelDocGroup.forEach((pixelDoc) => {
				pixelBatch.delete(pixelDoc.ref);
			});

			pixelBatch.commit();
		});

		getAuth().deleteUser(uid);

		res.status(200).json({ status: 'ok' });
	} catch (err) {
		console.error(err);
		res.status(403).json({ error: 'Forbidden' });
	}
}
