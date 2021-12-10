// function that generate's markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents:

[Description](#Description)

[Installation](#Installation)

## Descrption
${data.description}

## Installation
${data.installation}

## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## GitHub Link:
https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
