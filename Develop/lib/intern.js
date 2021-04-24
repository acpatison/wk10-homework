// TODO: Create Intern blueprint by extending Employee
const Employee = require('./employee');

class Intern extends Employee {
    // constructor
    constructor(name, id, email, role, school) {
        
        super(name, id, email, role);
        this.School = school;
    }
    getRole = () => {
        return this.Role;
    }
    getSchool = () => {
        return this.School;
    }
}

const intQuestions = async () => {
    try {
             const intInfo = await inquirer.prompt([
                 {
                     type: 'input',
                     name: 'intName',
                     message: `What is the Intern's name?`,
                 },
                 {
                     type: 'input',
                     name: 'intId',
                     message: `What is the Intern's ID?`,
                 },
                 {
                     type: 'input',
                     name: 'intEmail',
                     message: `What is the Intern's email?`,
                 },
                 {
                     type: 'input',
                     name: 'intSchool',
                     message: `What school does the Intern attend?`,
                 },
             ])
             const intern = new Intern(`${intInfo.intName}`, `${intInfo.intId}`, `${intInfo.intEmail}`, `${intInfo.intSchool}`);
             const team = [];
             team.push(intern);
            //  console.log(team.getRole());
            //  console.log(team.getSchool());

         } catch (error) {
             console.log(error)
         }
 }


module.exports = {Intern, intQuestions};