import { FunctionalMetadata } from '../components/Metadata/FunctionalMetadata';
import Link from 'next/link';
import {
	BsBugFill,
	BsCaretLeftFill,
	BsExclamationTriangleFill,
} from 'react-icons/bs';

export default function Error500() {
	return (
		<>
			<FunctionalMetadata title="Mood Graph - Error 500" />
			<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
				<main className="px-4 text-center">
					<div className="mx-auto mb-4 flex w-fit items-center">
						<h1 className="mr-3 font-display text-3xl font-extrabold">
							Error 500
						</h1>
						<BsExclamationTriangleFill className="h-6 w-6" />
					</div>
					<h2 className="mb-6">
						The server encountered an error while trying to process your
						request.
					</h2>
					<Link href="https://github.com/jlachniet/Mood-Graph/issues/new">
						<a className="mb-3 block text-blue-600">
							<BsBugFill className="mb-1 mr-2 inline-block h-6 w-6" />
							Submit a bug report.
						</a>
					</Link>
					<Link href="/">
						<a className="block text-blue-600">
							<BsCaretLeftFill className="mb-1 mr-1 inline-block h-6 w-6" />
							Go to the home page.
						</a>
					</Link>
				</main>
			</div>
		</>
	);
}
