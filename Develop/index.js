const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
    inquirer.questions([
            {
                type: 'input',
                name: 'name',
                message: 'What is your project name?',
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter a project description',
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter your installation instructions',
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter usage information',
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter contribution guidelines',
            },
            {
                input: 'input',
                name: 'name',
                message: 'Enter test instructions',
            },
        ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile("ReadMe.md", fileName, data), (err) =>
    err ? console.log(err) : console.log ('Success')
}
// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();