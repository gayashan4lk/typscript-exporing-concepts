function startGame() {
	let playerName: string;
	logPlayer(playerName);
}

function logPlayer(name: string) {
	console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);