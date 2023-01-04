function startGame() {
	let playerName: string = 'Johnny';
	logPlayer(playerName);
	logPlayer(undefined);
}

function logPlayer(name?: string) {
	console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
