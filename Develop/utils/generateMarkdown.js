// TODO: Create a function that returns a license badge based on which license is passed in

const Choice = require("inquirer/lib/objects/choice");
//renderLicenseBadge(license) 

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![github License](https://img.shields.io/badge/license-${license}-blue.svg)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseLink(
    license
  )}
  ${renderLicenseBadge(
    license
  )}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
## description
${data.projectDescription}
## installation
${data.usageInformation}
## usage information
${data.installationInstructions}
## constribution guidelines
${data.contributionGuidelines}
## test instructions
${data.testInstructions}
## license
${renderLicenseSection(
  data.license
)}
`;
}

module.exports = generateMarkdown;
