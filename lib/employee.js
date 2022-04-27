//Employee class creates objects, provides values for variables and implements methods of an employee

class Employee {
    //Constructor function for name, id and email objects
	constructor(name, id, email) {
		this.name = name;
		this.name = id;
		this.name = email;
	}
    //Employee methods
    getName();
    getId();
    getEmail();
    getRole(){
        return Employee;
    };
}

//Exports employee.js module
module.exports = Employee;