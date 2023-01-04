function startGame() {
	let playerName: string | undefined = getInputValue('playername');
	logPlayer(playerName);
	postScore(25, playerName);
}

function logPlayer(name?: string) {
	console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
	const inputElement: HTMLInputElement = document.getElementById(
		elementId
	) as HTMLInputElement;

	if (inputElement.value == '') {
		return undefined;
	}
	return inputElement.value;
}

function postScore(
	score: number,
	playerName: string = 'Anonymous player'
): void {
	const scoreElement: HTMLElement | null = document.getElementById(
		'postedScores'
	) as HTMLElement;

	scoreElement!.innerText = `${playerName} : ${score}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);
