import { BlogEntry, ChangelogEntry } from '../types/blog';

export function Blog(props: {
	blogEntries: BlogEntry[];
	changelogEntries: ChangelogEntry[];
}) {
	return (
		<ul className="mx-auto max-w-[64rem] px-8 pb-4">
			{props.blogEntries.map((entry, index) => (
				<li key={index} className="mb-8">
					<h2 className="font-display text-2xl font-bold">{entry.title}</h2>
					<h3 className="mb-3 font-thin italic">{entry.date}</h3>
					{entry.content}
				</li>
			))}

			<li>
				<h2 className="mb-3 font-display text-2xl font-bold">Changelog</h2>
				<ul>
					{props.changelogEntries.map((entry, index) => (
						<li key={index}>
							<h3 className="mb-2">
								<span className="font-bold">{entry.version}</span> ({entry.date}
								)
							</h3>
							<ul className="list-disc">
								{entry.changes.map((change, index) => (
									<li key={index}>{change}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</li>
		</ul>
	);
}
