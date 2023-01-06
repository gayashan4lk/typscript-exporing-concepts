"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multimath_library_1 = require("./multimath-library");
const multimath_library_2 = require("./multimath-library");
const multimath_library_3 = require("./multimath-library");
let uiEngine = new multimath_library_1.UiEngine();
let game;
document.getElementById('button_startGame').addEventListener('click', () => {
    const playerName = multimath_library_3.Utility.getValue('playername');
    const factor = Number(multimath_library_3.Utility.getValue('factor'));
    const problemCount = Number(multimath_library_3.Utility.getValue('problemCount'));
    game = new multimath_library_2.Game(playerName, factor, problemCount);
    multimath_library_3.Utility.logger(game);
    displayGame(problemCount, factor);
    document.getElementById('button_calculateScore').removeAttribute('disabled');
});
document
    .getElementById('button_calculateScore')
    .addEventListener('click', () => {
    let score = 0;
    for (let i = 1; i <= game.problemCount; i++) {
        let answer = Number(multimath_library_3.Utility.getValue(`answer_${i}`));
        if (answer === game.factor * i) {
            score++;
        }
    }
    game.setPlayerScore(score);
    multimath_library_3.Utility.logger(game);
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