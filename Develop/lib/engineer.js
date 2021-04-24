// TODO: Create Engineer by extending Employee
const Employee = require('./employee');

class Engineer extends Employee {
    // constructor
    constructor(name, id, email, role, gitHub) {
        
        super(name, id, email, role);
        this.gitHub = gitHub;
    }
    getRole = () => {
        console.log(`Engineer`)
    }
    getGitHub = () => {
        console.log(`${this.gitHub}`)
    }
}

const engQuestions = async () => {
    try {
             const engInfo = await inquirer.prompt([
                 {
                     type: 'input',
                     name: 'engName',
                     message: `What is the Engineer's name?`,
                 },
                 {
                     type: 'input',
                     name: 'engId',
                     message: `What is the Engineer's ID?`,
                 },
                 {
                     type: 'input',
                     name: 'engEmail',
                     message: `What is the Engineer's email?`,
                 },
                 {
                     type: 'input',
                     name: 'engGitHub',
                     message: `What is the Engineer's GitHub Username?`,
                 },
             ])
             const engineer = new Engineer(`${engInfo.Name}`, `${engInfo.intId}`, `${engInfo.engEmail}`, `${engInfo.engGitHub}`);
             const team = [];
             team.push(engineer);
            //  console.log(team.getRole());
            //  console.log(team.getGitHub());

         } catch (error) {
             console.log(error)
         }
 }



module.exports = {Engineer, engQuestions};