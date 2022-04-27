//requires Employee module
const Engineer = require("../lib/Engineer");

//tests whether gitHub is received through getGithub method
test("get github string from method", () => {
	const engineer = new Engineer("Elsie", 100, "elsie.may@gmail.com", "ElsieMay");
	expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
