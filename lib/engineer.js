//requires Employee module
const Employee = require("./Employee");

//Engineer class creates objects, provides values for variables and implements methods of an employee
//Extends from Employee super class
class Engineer extends Employee {
    //Constructor function for name, id and email objects
	constructor(name, id, email, github) {
		this.github = github;
	}
    //Engineer methods
    getGithub();
    getRole(){
        return Engineer;
    };
}

//Exports engineer.js module
module.exports = Engineer;