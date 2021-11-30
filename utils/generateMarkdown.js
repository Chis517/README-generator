// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents:

[Description](#Description)

[Installation](#Installation)

## Descrption
${data.description}

## Installation
${data.installation}


`;
}

module.exports = generateMarkdown;
