const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project?",
    name: "description",
  },
  {
    type: "list",
    message: "What license would you like to use for your project?",
    name: "license",
    choices: [
      "MIT",
      "APACHE 2.0",
      "No License"
    ],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What command should be used to run tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What instructions does the user need to about using this repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What instructions does the user need to about contributing to this repo?",
    name: "contribution",
  },
];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
