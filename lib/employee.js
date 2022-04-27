//Employee class creates objects, provides values for variables and implements methods of an employee

class Employee {
	//Constructor function for name, id and email objects
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	//Returns name from input
	getName() {
		return this.name;
	}
	//Returns id from input
	getId() {
		return this.id;
	}
	//Returns email from input
	getEmail() {
		return this.email;
	}
	//Returns employee from input
	getRole() {
		return "Employee";
	}
}

//Exports employee.js module
module.exports = Employee;
