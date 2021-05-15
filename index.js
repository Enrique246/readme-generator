const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utilities/markdown')
//const { table } = require('node:console');

const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },

      {
        type: 'input',
        message: 'What is your repo username?',
        name: 'repo',
      },

      {
        type: 'input',
        message: 'What is your email so people can reach you if they have questions regards your repo?',
        name: 'questions',
      },
    {
      type: 'input',
      message: 'What is the description?',
      name: 'description',
    },
    // {
    //   type: 'input',
    //   message: 'Include a table of contents?',
    //   name: 'tableofC1',

    // },
    {
        type: 'input',
        message: 'Any installation requirements?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Any usage information?',
        name: 'usage',
      },
      {
      type: 'list',
      name: 'license',
      message: 'Please provide license information.',
      choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
      },
      {
        type: 'input',
        message: 'Who where your contributors?',
        name: 'contributors',
      },

  ]
//   .then((data) => {
  //console.log(response)
//   const {title, description, tableofC, tableofC2, tableofC3, installation, usage} = data;
// const readme = 
// `
// # Title: ${title}

// ## Description:
//  - ${description}

// ## Table of Contents

// - ${tableofC} 


// ## Installation Instruccions

// - ${installation}

// ## Usage
// - ${usage}


// `

// fs.writeFile('ReadmeG.md', readme,(err) => 
// err ? console.log(err) : console.log('Success!')
// )
//   });

  function init() {
    return inquirer.prompt(questions);

  };
  function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};
  init()

  .then(answers => generateMarkdown(answers))
  .then(ReadmeG => writeToFile('ReadmeG.md', ReadmeG))
  .catch(err => {
      console.log(err); 
    });
  

