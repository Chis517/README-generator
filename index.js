// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type:'input',
      name: 'description',
      message: 'Describe your project in detail'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What packages need to be installed?'
    },
  ])

// TODO: Create a function to write README file
.then(function(data) {
  fs.writeFile('README.md', generateMarkdown(data), (err) => err ? console.log(err) : console.log("Your have created your README file successfully!"))
})
