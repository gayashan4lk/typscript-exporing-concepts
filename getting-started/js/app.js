"use strict";
class Player {
    formatName() {
        return this.name.toUpperCase();
    }
    constructor(name, highScore) {
        this.name = name;
        this.highScore = highScore;
    }
}
function startGame() {
    let playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(25, playerName);
    postScore(-3, playerName);
}
function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}
function getInputValue(elementId) {
    const inputElement = document.getElementById(elementId);
    if (inputElement.value == '') {
        return undefined;
    }
    return inputElement.value;
}
function postScore(score, playerName = 'Anonymous player') {
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = `${playerName} : ${score}`;
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    logger(`Score: ${score}`);
}
const logMessage = (message) => console.log(message);
function logError(error) {
    console.error(error);
}
let developer = {
    name: 'Micheal',
    title: 'Senior Developer',
};
let manager = {
    name: 'Paul',
    title: 'Senior manager',
    experience: 10,
};
let newManager = manager;
console.log(developer);
console.log(newManager);
let myResult = {
    playerName: 'Daniel',
    score: 99,
    problemCount: 5,
    factor: 1,
};
let player = {
    name: 'Daniel',
    formatName: function () {
        return 'Dan';
    },
};
console.log(myResult);
console.log(player);
let firstPlayer = new Player('Lanister', 98);
console.log(firstPlayer);
console.log(firstPlayer.formatName());
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map