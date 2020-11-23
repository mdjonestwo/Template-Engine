// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        console.log(`Name: ${this.name}`)
    }

    getID(){
        console.log(`ID: ${this.id}`)
    }
   
    getEmail(){
        console.log(`Email: ${this.email}`)
    }

    getRole(){
        console.log(this)
    }
}

const employee  = new Employee('Jones',' Engineer', "jones@jones.com");
console.log(employee);


module.exports = Employee;