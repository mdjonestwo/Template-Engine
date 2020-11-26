// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        Employee.prototype.getName = function () {
            console.log(`Name: ${this.name}`)
        }
    
        Employee.prototype.getID = function () {
            console.log(`ID: ${this.id}`)
        }
       
        Employee.prototype.getEmail = function () {
            console.log(`Email: ${this.email}`)
        }
    
        Employee.prototype.getRole = function () {
            console.log(this)
        }
    }
}

 


const john = new Employee("john", "id", "email")



module.exports = Employee;