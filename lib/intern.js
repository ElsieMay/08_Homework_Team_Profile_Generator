//requires Employee module
const Employee = require("./Employee");

//Intern class creates objects, provides values for variables and implements methods of an intern
//Extends from Employee super class
class Intern extends Employee {
	//Constructor function for name, id and email and school objects
	constructor(name, id, email, school) {
		this.school = school;
	}
	//Engineer methods
	getSchool() {
		return this.school;
	}
	getRole() {
		return Intern;
	}
}

//Exports intern.js module
module.exports = Intern;
