class Customer {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greet() {
		return `Hello, My name is ${this.name}`;
	}
}

let firstCustomer = new Customer('Alice');
let newMessage: string = firstCustomer.greet();

let webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage;
