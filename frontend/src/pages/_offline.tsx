import { FunctionalMetadata } from '../components/Metadata/FunctionalMetadata';
import { Heading } from '../components/Text/Heading';
import { BsWifiOff } from 'react-icons/bs';

export default function Offline() {
	return (
		<>
			<FunctionalMetadata title="Mood Graph - Offline" />
			<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
				<main>
					<div className="mx-auto mb-2 flex w-fit items-center">
						<Heading className="mr-3">Offline</Heading>
						<BsWifiOff className="h-12 w-12" />
					</div>
					<h2>Your device is currently offline.</h2>
				</main>
			</div>
		</>
	);
}
