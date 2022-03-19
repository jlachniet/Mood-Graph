/**
 * Saves an object to a JSON file.
 * @param fileName The name of the file.
 * @param object The content of the file.
 */
export function saveJSON(fileName: string, object: object) {
	const element = document.createElement('a');
	const blob = new Blob([JSON.stringify(object)], {
		type: 'application/json',
	});

	element.href = window.URL.createObjectURL(blob);
	element.download = fileName;

	element.click();
}
