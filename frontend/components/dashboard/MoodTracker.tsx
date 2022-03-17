import { PixelUploaderState } from '../../types/pixels';
import { usePixels } from '../../utils/hooks/pixels';
import { useUserSettings } from '../../utils/hooks/settings';
import { pixelsToPixelYear } from '../../utils/pixels';
import LoadingHeart from '../LoadingHeart';
import { PixelsMenu } from './PixelsMenu/PixelsMenu';
import { SettingsMenu } from './SettingsMenu/SettingsMenu';
import { useEffect, useState } from 'react';

export function MoodTracker() {
	const [pixels, updatePixel] = usePixels();
	const [selectedPixel, setSelectedPixel] = useState<string | null>(null);

	const [userSettings, updateUserSettings] = useUserSettings();
	const [showingSettingsMenu, setShowingSettingsMenu] = useState(false);

	const [uploaderState, setUploaderState] =
		useState<PixelUploaderState>('default');

	useEffect(() => {
		if (!showingSettingsMenu) {
			setUploaderState('default');
		}
	}, [showingSettingsMenu]);

	return (
		<>
			{(selectedPixel || showingSettingsMenu) && (
				<div
					className="absolute left-0 top-0 z-20 h-full w-full bg-neutral-900 opacity-50"
					onClick={() => {
						if (uploaderState !== 'importing') {
							setSelectedPixel(null);
							setShowingSettingsMenu(false);
						}
					}}
				/>
			)}
			{pixels && userSettings ? (
				<>
					{showingSettingsMenu && (
						<SettingsMenu
							pixels={pixels}
							updatePixel={updatePixel}
							userSettings={userSettings}
							uploaderState={uploaderState}
							setUploaderState={setUploaderState}
							updateUserSettings={updateUserSettings}
							setShowingSettingsMenu={setShowingSettingsMenu}
						/>
					)}
					<div className="sticky top-0 z-10 bg-purple-black py-4">
						<h1 className="mb-4 font-display text-4xl font-extrabold">
							Dashboard
						</h1>
						<button
							className="mb-1 rounded-md bg-primary-dark px-2 py-1 shadow hover:bg-primary"
							onClick={() => {
								setShowingSettingsMenu(true);
							}}
						>
							Settings
						</button>
					</div>
					<PixelsMenu
						pixels={pixelsToPixelYear(
							pixels,
							userSettings.startDate,
							userSettings.endDate
						)}
						selectedPixel={selectedPixel}
						setSelectedPixel={setSelectedPixel}
						updatePixel={updatePixel}
					/>
				</>
			) : (
				<LoadingHeart />
			)}
		</>
	);
}
