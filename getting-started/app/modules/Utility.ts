function getInputValue(elementId: string): string {
	const inputElement: HTMLInputElement = document.getElementById(
		elementId
	) as HTMLInputElement;

	return inputElement.value;
}

function logger(message: any): void {
	console.log(message);
}

export { getInputValue as getValue, logger };
