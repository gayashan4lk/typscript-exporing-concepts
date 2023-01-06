"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UiEngine_1 = require("./UiEngine");
const Game_1 = require("./Game");
const Utility_1 = require("./Utility");
let uiEngine = new UiEngine_1.UiEngine();
let game;
document.getElementById('button_startGame').addEventListener('click', () => {
    const playerName = (0, Utility_1.getValue)('playername');
    const factor = Number((0, Utility_1.getValue)('factor'));
    const problemCount = Number((0, Utility_1.getValue)('problemCount'));
    game = new Game_1.Game(playerName, factor, problemCount);
    (0, Utility_1.logger)(game);
    displayGame(problemCount, factor);
    document.getElementById('button_calculateScore').removeAttribute('disabled');
});
document
    .getElementById('button_calculateScore')
    .addEventListener('click', () => {
    let score = 0;
    for (let i = 1; i <= game.problemCount; i++) {
        let answer = Number((0, Utility_1.getValue)(`answer_${i}`));
        if (answer === game.factor * i) {
            score++;
        }
    }
    game.setPlayerScore(score);
    (0, Utility_1.logger)(game);
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