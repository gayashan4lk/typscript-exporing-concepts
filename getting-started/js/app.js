"use strict";
class UiEngine {
    createGameUi(problemCount, factor) {
        let templateString = '';
        for (let i = 1; i <= problemCount; i++) {
            templateString += `<div class="form-group">
      <label for="answer_${i}" class="col-sm-2 control-label">${factor} X ${i}</label>
      <div class="col-sm-1">
        <input type="text" class="form-control" id="answer_${i}" size="5" />
      </div>
    </div>`;
        }
        return templateString;
    }
}
class Utility {
    static getInputValue(elementId) {
        const inputElement = document.getElementById(elementId);
        return inputElement.value;
    }
}
class Player {
    constructor(name) {
        this.name = name;
    }
    formatName() {
        return this.name.toUpperCase();
    }
}
class ScoreBoard {
    constructor() {
        this.score = 0;
        this.highScore = 0;
    }
}
class Game {
    constructor(playerName, factor, problemCount) {
        if (playerName == null || playerName.trim() === '') {
            this.player = new Player('Anonymous');
        }
        else {
            this.player = new Player(playerName);
        }
        this.scoreBoard = new ScoreBoard();
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
let uiEngine = new UiEngine();
let game;
document.getElementById('button_startGame').addEventListener('click', () => {
    const playerName = Utility.getInputValue('playername');
    const factor = Number(Utility.getInputValue('factor'));
    const problemCount = Number(Utility.getInputValue('problemCount'));
    game = new Game(playerName, factor, problemCount);
    displayGame(problemCount, factor);
    document.getElementById('button_calculateScore').removeAttribute('disabled');
});
document
    .getElementById('button_calculateScore')
    .addEventListener('click', () => {
    let score = 0;
    for (let i = 1; i <= game.problemCount; i++) {
        let answer = Number(Utility.getInputValue(`answer_${i}`));
        if (answer === game.factor * i) {
            score++;
        }
    }
    game.setPlayerScore(score);
    document.getElementById('postedScores').innerHTML = `${game.getPlayerName()} : ${game.getPlayerScore()} / ${game.problemCount}`;
    document
        .getElementById('button_calculateScore')
        .setAttribute('disabled', 'true');
});
function displayGame(problemCount, factor) {
    let templateString = uiEngine.createGameUi(problemCount, factor);
    document.getElementById('game').innerHTML = templateString;
}
//# sourceMappingURL=app.js.map