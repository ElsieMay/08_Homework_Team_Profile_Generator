//required node modules
const inquirer = require("inquirer");
const fs = require("fs");

//employee modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML");

const teamMembers = [];

// Uses inquirer to generate questions
const promptManager = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Please enter the manager's name.",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("A manager name is required.");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "id",
				message: "Please enter the manager's ID number.",
				validate: (idInput) => {
					if (isNaN(idInput)) {
						console.log(idInput + "Please enter correct ID number.");
						return false;
					} else {
						return true;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "Please enter the manager's email address.",
				validate: (emailInput) => {
					const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (validEmail) {
						return true;
					} else {
						console.log("Invalid email address!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "officeNumber",
				message: "Please enter the manager's office number.",
				validate: (officeNumberInput) => {
					if (isNaN(officeNumberInput)) {
						console.log(officeNumberInput + "Please enter correct office number.");
						return false;
					} else {
						return true;
					}
				},
			},
		])
		.then((managerInfo) => {
			const { name, id, email, officeNumber } = managerInfo;
			const manager = new Manager(name, id, email, officeNumber);
			teamMembers.push(manager);
			addEmployee();
		});
};

const addEmployee = () => {
	return inquirer
		.prompt([
			{
				type: "list",
				name: "employee",
				message: "Would you like to add another employee to the team?",
				choices: ["Engineer", "Intern", "Not at the moment"],
			},
		])
		.then((list) => {
			if (list.employee === "Engineer") {
				promptEngineer();
			} else if (list.employee === "Intern") {
				promptIntern();
			} else {
				// //Writes HTML files using file system
				fs.writeFile("./src/index.html", generateHTML(teamMembers), (err) => {
					if (err) console.log(err);
					else {
						console.log("File written successfully");
						console.log(fs.readFileSync("./src/index.html", "utf8"));
					}
				});
			}
		});
};

function promptEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Please enter the engineer's name.",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("An engineer name is required.");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "id",
				message: "Please enter the engineer's ID number.",
				validate: (idInput) => {
					if (isNaN(idInput)) {
						console.log(idInput + "Please enter correct ID number.");
						return false;
					} else {
						return true;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "Please enter the engineer's email address.",
				validate: (emailInput) => {
					const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (validEmail) {
						return true;
					} else {
						console.log("Invalid email address!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "github",
				message: "Please enter the engineer's Github username.",
				validate: (githubInput) => {
					if (githubInput) {
						return true;
					} else {
						console.log("A username is required.");
						return false;
					}
				},
			},
		])
		.then((list) => {
			const engineer = new Engineer(list.name, list.id, list.email, list.github);
			teamMembers.push(engineer);
			addEmployee();
		});
}

function promptIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Please enter the intern's name.",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("An intern name is required.");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "id",
				message: "Please enter the intern's ID number.",
				validate: (idInput) => {
					if (isNaN(idInput)) {
						console.log(idInput + "Please enter correct ID number.");
						return false;
					} else {
						return true;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "Please enter the intern's email address.",
				validate: (emailInput) => {
					const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (validEmail) {
						return true;
					} else {
						console.log("Invalid email address!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "school",
				message: "Please enter the name of the intern's school.",
				validate: (schoolInput) => {
					if (schoolInput) {
						return true;
					} else {
						console.log("A school name is required.");
						return false;
					}
				},
			},
		])
		.then((list) => {
			const intern = new Intern(list.name, list.id, list.email, list.school);
			teamMembers.push(intern);
			addEmployee();
		});
}

//Starts prompts
promptManager();
