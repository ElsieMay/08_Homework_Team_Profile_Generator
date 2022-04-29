//requires Intern module
const Intern = require("../lib/Intern");

//tests whether school is received through getSchool method
test("get school string from method", () => {
	const intern = new Intern("Elsie", 100, "elsie.may@gmail.com", "ElsieMay");
	expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//tests whether employee is received through getRole method
test("get employee from role", () => {
	const employee = new Intern("Elsie", 100, "elsie.may@gmail.com");
	expect(employee.getRole()).toEqual("Intern");
});
