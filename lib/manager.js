//requires Employee module
const Employee = require("./Employee");

//Manager class creates objects, provides values for variables and implements methods of an intern
//Extends from Employee super class
class Manager extends Employee {
	//Constructor function for name, id and email and officeNumber objects
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	//Returns manager role from input
	getRole() {
		return Manager;
	}
}

//Exports Manager.js module
module.exports = Manager;
