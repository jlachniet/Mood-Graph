export declare global {
	interface JSON {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		parse(text: string, reviver?: (key: any, value: any) => any): unknown;
	}

	interface ArrayConstructor {
		isArray(a: unknown): a is unknown[];
	}

	namespace NodeJS {
		interface ProcessEnv {
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
		}
	}

	// Needs to be "var", not "let" or "const"
	// https://stackoverflow.com/questions/59459312/using-globalthis-in-typescript

	/**
	 * Whether to disable Workbox logging.
	 */
	// eslint-disable-next-line no-var
	var __WB_DISABLE_DEV_LOGS: boolean | undefined;
}
