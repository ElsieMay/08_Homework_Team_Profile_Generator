//requires Manager module
const Manager = require("../lib/Manager");

//tests whether employee is received through getRole method
test("get employee from role", () => {
	const employee = new Manager("Elsie", 100, "elsie.may@gmail.com");
	expect(employee.getRole()).toEqual("Manager");
});
