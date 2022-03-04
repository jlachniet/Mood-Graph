import { ReactElement } from 'react';

/**
 * An entry within the blog.
 */
export interface BlogEntry {
	/**
	 * The title of the blog entry.
	 */
	title: string;
	/**
	 * The date the blog entry was published.
	 */
	date: string;
	/**
	 * The content of the blog entry.
	 */
	content: ReactElement;
}

/**
 * An entry within the changelog.
 */
export interface ChangelogEntry {
	/**
	 * The version number.
	 */
	version: string;
	/**
	 * The date the version was released.
	 */
	date: string;
	/**
	 * The changes made since the previous version.
	 */
	changes: ReactElement[];
}
