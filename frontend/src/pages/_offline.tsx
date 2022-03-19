import { FunctionalMetadata } from '../components/Metadata/FunctionalMetadata';
import { PageHeading } from '../components/Text/PageHeading';
import { BsWifiOff } from 'react-icons/bs';

export default function Offline() {
	return (
		<>
			<FunctionalMetadata title="Mood Graph - Offline" />
			<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
				<main>
					<div className="mx-auto mb-2 flex w-fit items-center">
						<PageHeading className="mr-3">Offline</PageHeading>
						<BsWifiOff className="h-12 w-12" />
					</div>
					<h2>Your device is currently offline.</h2>
				</main>
			</div>
		</>
	);
}
