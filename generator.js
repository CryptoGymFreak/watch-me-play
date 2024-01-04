var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      name: "title",
      message: "What is the title of your project?",
      type: "input",
    },
    {
      name: "description",
      message: "Enter a description of your project",
      type: "input",
    },
    {
      name: "license",
      message: "Pick a license!",
      type: "list",
      choices: ["Apache 2.0", "MIT", "GNU Gpl 3"],
    },
    {
      name: "tableOfContents",
      message: "Enter Table of Contents of your project?",
      type: "input",
    },
    {
      name: "Installation",
      message: "Enter how we would install your project?",
      type: "input",
    },
    {
      name: "Usage",
      message: "Enter how we would Use your project!",
      type: "input",
    },
    {
      name: "Contributions",
      message: "Enter who helped with this project?",
      type: "input",
    },
    {
      name: "Test",
      message: "Answer the questions of this project!",
      type: "input",
    },
    {
      name: "Questions",
      message: "If you need any help with this project?",
      type: "input",
    },
  ])

  .then((answers) => {
    console.log("THE ANSWER WAS");
    console.log(answers);
    let template = "";
    if (answers) {
      if (answers.title) {
        template += `# ${answers.title} \n\n`;
        if (answers.license === "Apache 2.0") {
          console.log(answers.license);
          template += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
        } else if (answers.license === "MIT") {
          template += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
        } else {
          template += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n`;
        }
      }

      if (answers.description) {
        template += "# description \n\n";
        template += answers.description + "\n\n";
      }

      if (answers.tableOfContents) {
        template += "# Table of Contents \n\n";
        template += answers.tableOfContents + "\n\n";
      }

      if (answers.Installation) {
        template += "# Installation Instructions \n\n";
        template += answers.Installation + " \n\n";
      }

      if (answers.Usage) {
        template += "## Usage \n\n";
        template += answers.Usage + "\n\n";
      }

      if (answers.Contributions) {
        template += "# Contributions \n\n";
        template += answers.Contributions + "\n\n";
      }

      if (answers.Test) {
        template += "# Test \n\n";
        template += answers.Test + "\n\n";
      }

      if (answers.Questions) {
        template += "# Questions \n\n";
        template += answers.Questions;
      }
    }

    fs.writeFile("README.md", template, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("wrote file");
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
