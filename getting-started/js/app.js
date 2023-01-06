"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("./modules");
const modules_2 = require("./modules");
const modules_3 = require("./modules");
let uiEngine = new modules_1.UiEngine();
let game;
document.getElementById('button_startGame').addEventListener('click', () => {
    const playerName = modules_3.Utility.getValue('playername');
    const factor = Number(modules_3.Utility.getValue('factor'));
    const problemCount = Number(modules_3.Utility.getValue('problemCount'));
    game = new modules_2.Game(playerName, factor, problemCount);
    modules_3.Utility.logger(game);
    displayGame(problemCount, factor);
    document.getElementById('button_calculateScore').removeAttribute('disabled');
});
document
    .getElementById('button_calculateScore')
    .addEventListener('click', () => {
    let score = 0;
    for (let i = 1; i <= game.problemCount; i++) {
        let answer = Number(modules_3.Utility.getValue(`answer_${i}`));
        if (answer === game.factor * i) {
            score++;
        }
    }
    game.setPlayerScore(score);
    modules_3.Utility.logger(game);
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