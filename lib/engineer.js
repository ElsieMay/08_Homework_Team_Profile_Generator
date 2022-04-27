//requires Employee module
const Employee = require("./Employee");

//Engineer class creates objects, provides values for variables and implements methods of an employee
//Extends from Employee super class
class Engineer extends Employee {
	//Constructor function for name, id and email and github objects
	constructor(name, id, email, github) {
		this.github = github;
	}
	//Returns github from input
	getGithub() {
		return this.github;
	}
	//Returns engineer from input
	getRole() {
		return Engineer;
	}
}

//Exports engineer.js module
module.exports = Engineer;
