/**
 * The Mood Graph process environment.
 */
export type MoodGraphProcess = NodeJS.Process & {
	env: NodeJS.ProcessEnv & {
		/**
		 * The Firebase service account encoded as JSON and URI-encoded.
		 */
		FIREBASE_SERVICE_ACCOUNT: string;
		/**
		 * The Firebase auth emulator host URI.
		 */
		FIRESTORE_AUTH_EMULATOR_HOST?: string;
		/**
		 * The Firestore emulator host URI.
		 */
		FIRESTORE_EMULATOR_HOST?: string;
	};
};

/**
 * The global scope of a Workbox service worker.
 */
export interface WorkboxGlobalScope extends ServiceWorkerGlobalScope {
	/**
	 * Whether to disable Workbox logging.
	 */
	__WB_DISABLE_DEV_LOGS?: boolean;
}
