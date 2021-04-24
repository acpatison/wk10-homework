// TODO: Create Manager blueprint by extending employee
const Employee = require('./employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    // constructor
    constructor(name, id, email, role, officeNbr) {
        
        super(name, id, email, role);
        this.officeNbr = officeNbr;
        this.Role = role;
    }
    getRole = () => {
        console.log(`Team Manager`)
    }
    getOfficeNbr = () => {
        console.log(`${this.officeNbr}`)
    }
}

const manQuestions = async () => {
    try {
             const manInfo = await inquirer.prompt([
                 {
                     type: 'input',
                     name: 'manName',
                     message: `What is the Team Manager's name?`,
                 },
                 {
                     type: 'input',
                     name: 'manId',
                     message: `What is the Manager's ID?`,
                 },
                 {
                     type: 'input',
                     name: 'manEmail',
                     message: `What is the Manager's email?`,
                 },
                 {
                     type: 'input',
                     name: 'manOffice',
                     message: `What is the Manager's office number?`,
                 },
             ])
             const manager = new Manager(`${manInfo.manName}`, `${manInfo.manId}`, `${manInfo.Role}`, `${manInfo.manOffice}`);
             const team = [];
             team.push(manager);
            //  console.log(getRole())
         } catch (error) {
             console.log(error)
         }
 }
// Do I need to create arrays in each file with specific names, Id's etc? or should I blend these all together and randomly generate them in Index.js?




// TODO How do I generate the new office number???

// TODO: How do I overwrite "employee"??


module.exports = {Manager, manQuestions};
