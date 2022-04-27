//requires Employee module
const Employee = require("./Employee");

//Intern class creates objects, provides values for variables and implements methods of an intern
//Extends from Employee super class
class Intern extends Employee {
	//Constructor function for name, id and email and school objects
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}
	//Returns school from input
	getSchool() {
		return this.school;
	}
	//Returns intern role from input
	getRole() {
		return Intern;
	}
}

//Exports intern.js module
module.exports = Intern;
