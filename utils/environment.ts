import { FirebaseOptions } from 'firebase/app';

export const FIREBASE_OPTIONS: FirebaseOptions = {
	apiKey: 'AIzaSyAgeljr2ouEOopjmNwg5BKUaK2pTuOQUmU',
	authDomain: 'mood-graph-336503.firebaseapp.com',
	databaseURL: 'https://mood-graph-336503-default-rtdb.firebaseio.com',
	projectId: 'mood-graph-336503',
	storageBucket: 'mood-graph-336503.appspot.com',
	messagingSenderId: '785725629392',
	appId: '1:785725629392:web:ef91976a52867197f84fd5',
};

/**
 * Checks whether the current environment is a browser.
 * @returns Whether the current environment is a browser.
 */
export function isBrowser() {
	return typeof window === 'object';
}

/**
 * Checks whether the current enviornment is a server.
 * @returns Whether the current environment is a server.
 */
export function isServer() {
	return typeof window === 'undefined';
}

/**
 * Checks whether the current environment is in development mode.
 * @returns Whether the current environment is in development mode.
 */
export function isDev() {
	return process.env.NODE_ENV === 'development';
}

/**
 * Checks whether the current environment is in production mode.
 * @returns Whether the current environment is in production mode.
 */
export function isProd() {
	return process.env.NODE_ENV === 'production';
}
