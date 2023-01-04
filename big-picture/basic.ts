class Customer {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greet() {
		return `Hello, My name is ${this.name}`;
	}
}

class Student extends Customer {
	school: string;

	constructor(name: string, school: string) {
		super(name);
		this.school = school;
	}

	greet() {
		return `Hello, My name is ${this.name}. I'm a student at ${this.school}.`;
	}
}

let firstCustomer = new Customer('Alice');
let newMessage: string = firstCustomer.greet();

let firstStudent = new Student('Micheal', 'Harvard');
let studentMessage: string = firstStudent.greet();

let webHeading = document.querySelector('h1');
webHeading!.textContent = studentMessage;
