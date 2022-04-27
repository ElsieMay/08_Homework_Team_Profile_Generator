//requires Employee module
const Employee = require("../lib/Employee");

//tests instantiated object's properties
test("instantiated object properties", () => {
	const employee = new Employee("Elsie", 100, "elsie.may@gmail.com");
	expect(typeof employee.name).toBe("string");
	expect(typeof employee.id).toBeTruthy();
	expect(typeof employee.email).toBe("string");
});

//tests whether name is received through getName method
test("get name from method", () => {
	const name = "Elsie";
	const employee = new Employee(name);
	expect(employee.getName()).toBe("Elsie");
});

//tests whether id is received through getId method
test("get id from method", () => {
	const employee = new Employee("Elsie", 100, "elsie.may@gmail.com");
	expect(employee.getId()).toBeTruthy();
});

//tests whether email is received through getEmail method
test("get email from method", () => {
	const employee = new Employee("Elsie", 100, "elsie.may@gmail.com");
	expect(employee.getEmail()).toBe("elsie.may@gmail.com");
});

//tests whether employee is received through getRole method
test("get employee from role", () => {
	const employee = new Employee("Elsie", 100, "elsie.may@gmail.com");
	expect(employee.getRole()).toEqual(Employee);
});
