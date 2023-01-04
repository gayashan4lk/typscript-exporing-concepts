"use strict";
class Customer {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, My name is ${this.name}`;
    }
}
let firstCustomer = new Customer('Alice');
let newMessage = firstCustomer.greet();
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
