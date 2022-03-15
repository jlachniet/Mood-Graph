import { Button } from '../Form/Button';

export function SettingsMenuBackup() {
	return (
		<div>
			<h3 className="mb-2 font-display text-lg font-semibold">Backup</h3>
			<label
				tabIndex={0}
				className="mr-2 inline-block cursor-pointer rounded bg-red-500 px-2 py-1 font-display font-semibold text-neutral-100 shadow hover:brightness-110"
			>
				Import Data
				<input type="file" className="hidden" />
			</label>
			<Button background="bg-sky-500" color="text-neutral-100">
				Export Data
			</Button>
		</div>
	);
}
