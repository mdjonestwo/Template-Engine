// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber){
        super("Bob", "Manager", "bob@cool.coom");
        this.officeNumber = officeNumber;
    }
}

const bob = new Manager("919-555-1234")

console.log(bob)