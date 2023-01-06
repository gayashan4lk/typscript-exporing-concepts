import { UiEngine } from './modules';
import { Game } from './modules';
import { Utility } from './modules';

let uiEngine: UiEngine = new UiEngine();
let game: Game;

document.getElementById('button_startGame')!.addEventListener('click', () => {
	const playerName = Utility.getValue('playername');
	const factor = Number(Utility.getValue('factor'));
	const problemCount = Number(Utility.getValue('problemCount'));

	game = new Game(playerName, factor, problemCount);
	Utility.logger(game);

	displayGame(problemCount, factor);

	// enable the calculate button
	document.getElementById('button_calculateScore')!.removeAttribute('disabled');
});

document
	.getElementById('button_calculateScore')!
	.addEventListener('click', () => {
		// calculate score
		let score: number = 0;
		for (let i = 1; i <= game.problemCount; i++) {
			let answer: number = Number(Utility.getValue(`answer_${i}`));
			if (answer === game.factor * i) {
				score++;
			}
		}

		// set score
		game.setPlayerScore(score);

		Utility.logger(game);

		// display scoreboard
		document.getElementById(
			'postedScores'
		)!.innerHTML = `${game.getPlayerName()} : ${game.getPlayerScore()} / ${
			game.problemCount
		}`;

		// disable the calculate button
		document
			.getElementById('button_calculateScore')!
			.setAttribute('disabled', 'true');
	});

function displayGame(problemCount: number, factor: number): void {
	let templateString: string = uiEngine.createGameUi(problemCount, factor);
	document.getElementById('game')!.innerHTML = templateString;
}
