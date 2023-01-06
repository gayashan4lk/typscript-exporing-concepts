"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Player_1 = require("./Player");
const ScoreBoard_1 = require("./ScoreBoard");
class Game {
    constructor(playerName, factor, problemCount) {
        if (playerName == null || playerName.trim() === '') {
            this.player = new Player_1.Player('Anonymous');
        }
        else {
            this.player = new Player_1.Player(playerName);
        }
        this.scoreBoard = new ScoreBoard_1.ScoreBoard();
        this.factor = factor;
        this.problemCount = problemCount;
    }
    getPlayerName() {
        return this.player.name;
    }
    setPlayerScore(score) {
        this.scoreBoard.score = score;
    }
    getPlayerScore() {
        return this.scoreBoard.score;
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map