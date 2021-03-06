import { ReactNode } from 'react';

export function UpdateCard(props: {
	versionNumber: string;
	releaseNotes: ReactNode[];
	isLatest?: boolean;
}) {
	return (
		<li
			className={`rounded-md px-3 py-2 shadow-sm shadow-black/50 transition-transform hover:scale-101 ${
				props.isLatest
					? 'bg-green-200 dark:bg-green-800'
					: 'bg-sky-200 dark:bg-sky-800'
			}`}
		>
			<h3 className="font-display text-lg font-semibold">
				Release {props.versionNumber}
			</h3>
			<ul className="ml-6 list-disc">
				{props.releaseNotes.map((note, index) => (
					<li key={index}>{note}</li>
				))}
			</ul>
		</li>
	);
}
