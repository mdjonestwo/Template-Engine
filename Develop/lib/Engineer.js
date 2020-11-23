// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(gitHub){
        super("John", "Engineer", "john@john.com")        
        this.gitHub = gitHub; 
    }

}

const john = new Engineer("github.com/john")

console.log(john)