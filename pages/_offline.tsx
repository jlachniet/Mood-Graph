import { FunctionalMetadata } from '../components/Metadata/FunctionalMetadata';
import { BsWifiOff } from 'react-icons/bs';

export default function Offline() {
	return (
		<>
			<FunctionalMetadata title="Mood Graph - Offline" />
			<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
				<main>
					<div className="mx-auto mb-2 flex w-fit items-center">
						<h1 className="mr-3 font-display text-3xl font-extrabold">
							Offline
						</h1>
						<BsWifiOff className="h-12 w-12" />
					</div>
					<h2>Your device is currently offline.</h2>
				</main>
			</div>
		</>
	);
}
