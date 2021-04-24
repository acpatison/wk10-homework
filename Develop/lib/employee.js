// TODO: Create Employee class blueprint
class Employee {
    constructor(name, id, email, role){
        this.Name = name;
        this.Id = id;
        this.Email = email;
        this.Role = role;
    }
        getName() {
            console.log(`Employee Name: ${this.Name}`);
            }

        getId() {
                console.log(`Employee ID: ${this.Id}`)
            }

        getEmail() {
                console.log(`Email: ${this.Email}`)
            }

        getRole() {
            console.log(`${this.Role}`)
        };
    }

const employee = new Employee(`${this.Name}`,`${this.Id}`,`${this.Email}`,`Employee`);

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

// TODO: Need to figure out why Employee ROle is not getting logged!!!

// Export blueprint
module.exports = Employee