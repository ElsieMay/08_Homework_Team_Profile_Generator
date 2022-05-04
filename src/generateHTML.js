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

module.exports = generateHTML;
