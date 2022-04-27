const Employee = require("./Employee");
//Engineer class creates objects, provides values for variables and implements methods of an employee
class Engineer extends Employee {
    //Constructor function for name, id and email objects
	constructor(name, id, email, github) {
		this.github = github;
	}
    //Employee methods
    getGithub();
    getRole(){
        return Engineer;
    };
}

//Exports employee.js module
module.exports = Engineer;