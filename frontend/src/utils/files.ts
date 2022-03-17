export function saveJSON(fileName: string, content: unknown) {
	const element = document.createElement('a');
	const blob = new Blob([JSON.stringify(content)], {
		type: 'application/json',
	});

	element.href = window.URL.createObjectURL(blob);
	element.download = fileName;

	element.click();
}
