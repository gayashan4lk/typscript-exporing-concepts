class Player implements IPerson {
	name: string;
	age?: number | undefined;
	highScore: number;

	formatName() {
		return this.name.toUpperCase();
	}

	constructor(name: string, highScore: number) {
		this.name = name;
		this.highScore = highScore;
	}
}
