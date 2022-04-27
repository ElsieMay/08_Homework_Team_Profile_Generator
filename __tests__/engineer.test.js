//requires Employee module
const Engineer = require("../lib/Engineer");

//tests whether gitHub is received through getGithub method
test("get github string from method", () => {
	const gitUser = "ElsieMay";
	const engineer = new Engineer(gitUser);
	expect(engineer.getGithub()).toBe("string");
});
