export class Player {
	name: string;
	age?: number;
	highScore?: number;

	constructor(name: string) {
		this.name = name;
	}

	formatName() {
		return this.name.toUpperCase();
	}
}
