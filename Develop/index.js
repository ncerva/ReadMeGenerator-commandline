const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Enter a project description',
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Enter your installation instructions',
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Enter usage information',
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Enter contribution guidelines',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Enter test instructions',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select License',
            choices: [
                'MIT',
                'Apache 2.0',
                'BSD 3',
                'none',
            ]
        }
    ]).then((questions) => writeToFile(questions))
    .then(() => console.log('Successfully created ReadMe'))
    .catch((err) => console.error(err))};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("ReadMe.md", generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
        }
        console.log('New Readme Generated');
    })
};
// TODO: Create a function to initialize app
function init() {
    promptUser()
        
}

// Function call to initialize app
init();