//Employee class creates objects, provides values for variables and implements methods of an employee

class Employee {
	//Constructor function for name, id and email objects
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	//Employee methods
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return Employee;
	}
}

//Exports employee.js module
module.exports = Employee;
