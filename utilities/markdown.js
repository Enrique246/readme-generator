// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-red)`;
    } else {
        return '';
    }
}
const linkLicense = license => {
    if (license) {
        return `https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba`;
    } else {
        return '';
    }
};

// Creating table of contents 
const createTable = contentsArray => {
let contList = '';
    contentsArray.forEach((item) => {

        // indents 'Screenshots' list item
        if (item.content && item.header === true) {
        contList += `   * [${item.header}](#${(item.header).toLowerCase()})
`;
        } else if (item.content) {
            contList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
`;
        }
    });
    return contList;
};

// Body of Table of Contents
const cUsage = (usage) => {
    return `${usage}}`
};
const cInstallation = (installation) => {
   return `${installation}`
 };

const cQuestions = (email, github, repo) => {
    if (email) {
        return `Any questions about the project, please open an issue at my [GitHub](https://github.com/${github}/${repo}/issues) or contact me via email at ${email}. Please refer to the link for more about my work, [${github}](https://github.com/${github}/).`
    } else {
        return '';
    }
};
const cTests = (tests)=>{
    return `${tests}`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
    const {github, repo, title, description, usage, license, installation } = data;
    let readmeCont = '';
    const sectionArray = [ 
        {
            header: 'Installation',
            content: cInstallation(data.installation)
        },
        {
            header: 'Usage',
            content: cUsage(data.usage)
        },
        
        {
            header: 'Contributors', 
            content: data.contributors 
        },
        {
            header: 'Tests',
            content: cTests(data.tests)
        },
        {
            header: 'Questions',
            content: cQuestions(data.questions, github, repo)
        },
    ];

    

    sectionArray.forEach((sectionI) => {
        if (sectionI.content && sectionI.header === true) {
            readmeCont += `### ${sectionI.header}
${sectionI.content}
`
        } else if (sectionI.content) {
        readmeCont += `## ${sectionI.header}
${sectionI.content}
    
`;
        }
    });

// Table of Contents
  return `# ${title}

  ### Licence Badge:
  ${renderLicenseBadge(license)}

 ## License 

  ### Description of license
  - The aplication is covered under the license of ${(license)}

  ### Link to Licence
  - If you wish to seach for your license description feel free to access this link : ${linkLicense(license)}

 ## Description:
 - ${description}
 
 ## Table of Contents
 
 ${createTable(sectionArray)}

${readmeCont}
`;
}

module.exports = generateMarkdown;