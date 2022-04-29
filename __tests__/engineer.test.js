//requires Employee module
const Engineer = require("../lib/Engineer");

//tests whether gitHub is received through getGithub method
test("get github string from method", () => {
	const engineer = new Engineer("Elsie", 100, "elsie.may@gmail.com", "ElsieMay");
	expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//tests whether employee is received through getRole method
test("get employee from role", () => {
	const employee = new Employee("Elsie", 100, "elsie.may@gmail.com");
	expect(employee.getRole()).toEqual("Engineer");
});
