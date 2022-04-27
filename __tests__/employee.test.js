//requires Employee module
const Employee = require("../lib/Employee");

//tests instantiated object's properties
test("instantiated object properties", () => {
	const employee = new Employee("Elsie", 100, "elsie.may@gmail.com");
	expect(typeof employee.name).toBe("string");
	expect(typeof employee.id).toBeTruthy();
	expect(typeof employee.email).toBe("string");
});

//tests whether
