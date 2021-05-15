const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utilities/markdown')

// Questions Section
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
      {
        type: 'input',
        message: 'Did you made any tests?',
        name: 'tests',
      },

  ]
// Function init section
  function init() {
    return inquirer.prompt(questions);

  };

  //Writ to File function
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
  

