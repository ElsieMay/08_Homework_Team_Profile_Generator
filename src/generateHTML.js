//node modules
const inquirer = require("inquirer");
const fs = require("fs");

const indexHTML = require("./dist/index.html");

//generates Engineer card
const generateEngineer = (Engineer) => {
	return;
	`<div class="card" style="width: 18rem">
				<div class="card-body">
					<h5 class="card-title">${Engineer.name}</h5>
					<p class="card-text">Engineer</p>
					<i class="fa-solid fa-glasses"></i>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Id: ${Engineer.id}</li>
					<li class="list-group-item">Github Username: <a href="https://github.com/${Engineer.github}">${Engineer.github}</li>
				</ul>
				<div class="card-body">
					<a href="#" class="card-link">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a>
				</div>
			</div>`;
};

//generates Manager card
const generateManager = (Manager) => {
	return;
	`<div class="card" style="width: 18rem">
				<div class="card-body">
					<h5 class="card-title">${Manager.name}</h5>
					<p class="card-text">Manager</p>
					<i class="fa-solid fa-mug-hot"></i>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Id: ${Manager.id}</li>
                    <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
				</ul>
				<div class="card-body">
					<a href="#" class="card-link">Email: <a href="mailto:${Manager.email}">${Manager.email}</a>
				</div>
			</div>`;
};

//generates Intern card
const generateIntern = (Intern) => {
	return;
	`<div class="card" style="width: 18rem">
				<div class="card-body">
					<h5 class="card-title">${Intern.name}</h5>
					<p class="card-text">Manager</p>
                    <i class="fa-solid fa-graduation-cap"></i>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Id: ${Intern.id}</li>
                    <li class="list-group-item">School: ${Intern.school}</li>
				</ul>
				<div class="card-body">
					<a href="#" class="card-link">Email: <a href="mailto:${Intern.email}">${Intern.email}</a>
				</div>
			</div>`;
};

//function to push data
generateData = (data) => {
	//array for all card HTML
	cardHTML = [];

	//for loop to loop through employees
	for (let index = 0; index < data.length; index++) {
		const Employee = data[index];
		const getRole = Employee.getRole();

		//if statement for Manager Card
		if (role === "Manager") {
			const managerHTML = generateManager(Employee);

			cardHTML.push(managerHTML);
		}
		//if statement for Engineer Card
		if (role === "Engineer") {
			const engineerHTML = generateEngineer(Employee);

			cardHTML.push(engineerHTML);
		}
		//if statement for Engineer Card
		if (role === "Intern") {
			const internHTML = generateIntern(Employee);

			cardHTML.push(internHTML);
		}
	}
	//joins HTML strings
	const employeeRender = cardHTML.join("");

	//generates title and placement of cards
	const generateTitle = pageTitle(cards);
	return generateTitle;
};

const pageTitle = (cards) => {
	return `
    <!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
		<script src="https://kit.fontawesome.com/2c4df21959.js" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="./style.css" />
		<title>Team Profiles</title>
	</head>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd" id="navbar">My Team</nav>
	</header>
	<body>
		<section class="cards">
			<div class="card" style="width: 18rem">
				<div class="card-body">
                ${cards}
			</div>
		</section>
	</body>
</html>
`;
};

module.exports = generateHTML;
