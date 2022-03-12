import { Button } from '../components/Form/Button';
import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';
import { usePixels } from '../utils/hooks/pixels';
import { useUserSettings } from '../utils/hooks/settings';
import { useState } from 'react';

export default function Dashboard() {
	useAuthenticatedRoute();

	const { pixels } = usePixels();
	const { userSettings } = useUserSettings();

	const [selectedPixel, setSelectedPixel] = useState<string | null>(null);

	return (
		<>
			<Metadata title="Mood Graph - Dashboard" url="/dashboard" />
			{selectedPixel && (
				<div
					className="absolute left-0 top-0 z-20 h-full w-full bg-neutral-900 opacity-50"
					onClick={() => setSelectedPixel(null)}
				/>
			)}
			{pixels && userSettings ? (
				<div className="flex h-[calc(100vh-2.75rem-1px)] justify-center p-4">
					<div className="flex max-w-xl flex-col rounded-md bg-transparent shadow-2xl">
						<header className="rounded-t-md bg-violet-400 p-4 text-center">
							<h1 className="mb-2 font-display text-3xl font-extrabold">
								Dashboard
							</h1>
							<Button>Settings</Button>
						</header>
						<main className="overflow-hidden rounded-b-md bg-neutral-50 p-4">
							<div className="max-h-full overflow-auto">
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Quisquam eligendi amet voluptates distinctio sequi quidem
									tempore ducimus ullam, numquam molestias possimus dignissimos
									natus. Sed, amet assumenda ab adipisci ea quidem, maiores
									aspernatur sint corrupti molestias, similique nihil deserunt
									modi iure? Nostrum cumque vel quasi rem laborum, nobis
									expedita, minima exercitationem quis magni similique veniam
									laudantium aliquam, voluptatum quas
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Quisquam eligendi amet voluptates distinctio sequi quidem
									tempore ducimus ullam, numquam molestias possimus dignissimos
									natus. Sed, amet assumenda ab adipisci ea quidem, maiores
									aspernatur sint corrupti molestias, similique nihil deserunt
									modi iure? Nostrum cumque vel quasi rem laborum, nobis
									expedita, minima exercitationem quis magni similique veniam
									laudantium aliquam, voluptatum quas
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Quisquam eligendi amet voluptates distinctio sequi quidem
									tempore ducimus ullam, numquam molestias possimus dignissimos
									natus. Sed, amet assumenda ab adipisci ea quidem, maiores
									aspernatur sint corrupti molestias, similique nihil deserunt
									modi iure? Nostrum cumque vel quasi rem laborum, nobis
									expedita, minima exercitationem quis magni similique veniam
									laudantium aliquam, voluptatum quas
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Quisquam eligendi amet voluptates distinctio sequi quidem
									tempore ducimus ullam, numquam molestias possimus dignissimos
									natus. Sed, amet assumenda ab adipisci ea quidem, maiores
									aspernatur sint corrupti molestias, similique nihil deserunt
									modi iure? Nostrum cumque vel quasi rem laborum, nobis
									expedita, minima exercitationem quis magni similique veniam
									laudantium aliquam, voluptatum quas
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Quisquam eligendi amet voluptates distinctio sequi quidem
									tempore ducimus ullam, numquam molestias possimus dignissimos
									natus. Sed, amet assumenda ab adipisci ea quidem, maiores
									aspernatur sint corrupti molestias, similique nihil deserunt
									modi iure? Nostrum cumque vel quasi rem laborum, nobis
									expedita, minima exercitationem quis magni similique veniam
									laudantium aliquam, voluptatum quas
								</p>
							</div>
						</main>
					</div>
				</div>
			) : (
				<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
					<LoadingIcon />
				</div>
			)}
		</>
	);
}
