// TODO: Bridge in the exports from other places
// const Employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const inquirer = require('inquirer');


const team = [];

const manQuestions = manager.manQuestions();
const man1 = new manager.Manager(manQuestions.manName, manQuestions.manId, manQuestions.manEmail, manQuestions.manOffice);
team.push(man1);
console.log(man1);


const addMembers = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'addToTeam',
        message: 'Do you want to add more team members? Y/N'
    }).then(function nextSteps1(response) {
        if (response == 'Y') {
            console.log('Fuck yes, this works');
        }
        else if (response == 'N') {
            // create your HTML logic here
            console.log('Fuck me this doesnt work');
        }
    })
}
addMembers();

// is that it? y generate html/ n ok, what type of emp do you need?
// const addToTeam = async () => {
//     try {
//         const teamInfo = await inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'addToTeam',
//                 message: 'Do you want to add another member to the team? Y/N'
//             },
//         ])
//         console.log(teamInfo);
//         if (teamInfo.addToTeam == 'Y') {
//             const addMember = async () => {
//                 try {
//                     const addWho = await inquirer.prompt([
//                         {
//                             type: 'input',
//                             name: 'addWho',
//                             message: 'Do you want to add an Engineer or an Intern?'
//                         },
//                     ])
//                     console.log(addWho)
//                     if (addWho.addWho == 'Intern') {
                        
//                     } else if (addWho.addWho == 'Engineer') {
//                         console.log('good news');
//                     } 
//                 } else {
//                     // Create HTML here by looping
//                     console.log('bad news');
//                 }
//             }
//    }
// }

// addToTeam();
// If User Selects Intern from the prompt

const engQuestions = engineer.engQuestions();
const eng1 = new engineer.Engineer(engQuestions.engName, engQuestions.engId, engQuestions.engEmail, engQuestions.engGitHub);

team.push(eng1);
console.log(eng1);

// If User Selects Engineer from the prompt
const intQuestions = intern.intQuestions();
const int1 = new intern.Intern(intQuestions.intName, intQuestions.intId, intQuestions.intEmail, intQuestions.intSchool);

team.push(int1);
console.log(int1);
    

// Create an HTML Card loop to loop cards creation for all 




    // TODO: Select Finish Building Team-->exit command line and HTML created

        // TODO: Build your HTML here with object literal elements called via strings in the html elements
        // ***** DO NOT CREATE THIS UNTIL YOU MAKE SURE YOU CONSOLE.LOG EVERYTHING CORRECTLY
        