import { Player } from './Player';
import { ScoreBoard } from './ScoreBoard';

export class Game {
	private player: Player;
	private scoreBoard: ScoreBoard;
	factor: number;
	problemCount: number;

	constructor(playerName: string, factor: number, problemCount: number) {
		if (playerName == null || playerName.trim() === '') {
			this.player = new Player('Anonymous');
		} else {
			this.player = new Player(playerName);
		}

		this.scoreBoard = new ScoreBoard();
		this.factor = factor;
		this.problemCount = problemCount;
	}

	getPlayerName(): string {
		return this.player.name;
	}

	setPlayerScore(score: number): void {
		this.scoreBoard.score = score;
	}

	getPlayerScore(): number {
		return this.scoreBoard.score;
	}
}
