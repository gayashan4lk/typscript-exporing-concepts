function startGame() {
	let playerName: string | undefined = getInputValue('playername');
	logPlayer(playerName);
	postScore(25, playerName);
	postScore(-3, playerName);
	//logMessage("hi, i'am an arrow function.");
}

function logPlayer(name?: string) {
	console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
	const inputElement: HTMLInputElement = document.getElementById(
		elementId
	) as HTMLInputElement;

	if (inputElement.value == '') {
		return undefined;
	}
	return inputElement.value;
}

function postScore(
	score: number,
	playerName: string = 'Anonymous player'
): void {
	const scoreElement: HTMLElement | null = document.getElementById(
		'postedScores'
	) as HTMLElement;

	scoreElement!.innerText = `${playerName} : ${score}`;

	let logger: (value: string) => void;
	if (score < 0) {
		logger = logError;
	} else {
		logger = logMessage;
	}
	logger(`Score: ${score}`);
}

const logMessage = (message: string) => console.log(message);

function logError(error: string): void {
	console.error(error);
}

interface Employee {
	name: string;
	title: string;
}

let developer: Employee = {
	name: 'Micheal',
	title: 'Senior Developer',
};

let manager = {
	name: 'Paul',
	title: 'Senior manager',
	experience: 10,
};

let newManager: Employee = manager;

console.log(developer);
console.log(newManager);

let myResult: IResult = {
	playerName: 'Daniel',
	score: 99,
	problemCount: 5,
	factor: 1,
};

let player: IPerson = {
	name: 'Daniel',
	formatName: function (): string {
		return 'Dan';
	},
};

console.log(myResult);
console.log(player);

document.getElementById('startGame')!.addEventListener('click', startGame);
