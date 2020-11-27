// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        Employee.prototype.getName = function () {
            return this.name
        }
    
        Employee.prototype.getId = function () {
            return this.id
        }
       
        Employee.prototype.getEmail = function () {
            return this.email            
        }     
        Employee.prototype.getRole = function (a){
           return this.constructor.name
        }  
    }

}

    
  
    


 


const john = new Employee("john", "id", "email")


//john.getRole()
module.exports = Employee;