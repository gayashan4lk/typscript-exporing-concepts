class Utility {
	static getInputValue(elementId: string): string {
		const inputElement: HTMLInputElement = document.getElementById(
			elementId
		) as HTMLInputElement;

		return inputElement.value;
	}
}
