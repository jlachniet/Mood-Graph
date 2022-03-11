import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';
import { usePixels } from '../utils/hooks/pixels';
import { useUserSettings } from '../utils/hooks/settings';
import { useState } from 'react';

export default function Dashboard() {
	useAuthenticatedRoute();

	const { pixels } = usePixels();
	const [selectedPixel, setSelectedPixel] = useState<string | null>(null);

	const { userSettings } = useUserSettings();

	return (
		<>
			<Metadata title="Mood Graph - Dashboard" url="/dashboard" />
			{selectedPixel && (
				<div
					className="absolute left-0 top-0 z-20 h-full w-full bg-neutral-900 opacity-50"
					onClick={() => {
						setSelectedPixel(null);
					}}
				/>
			)}
			{pixels && userSettings ? (
				<></>
			) : (
				<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
					<LoadingIcon />
				</div>
			)}
		</>
	);
}
