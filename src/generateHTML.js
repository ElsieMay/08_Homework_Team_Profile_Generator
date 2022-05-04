//node modules
const inquirer = require("inquirer");
const fs = require("fs");

const indexHTML = require("./dist/index.html");

//generates Engineer card
const generateEngineer = function (Engineer) {
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

module.exports = generateHTML;
