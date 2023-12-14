class Customer1{

    firstName: String;
    lastName: String;

    constructor(firstName1: String,lastName1: String){

        this.firstName = firstName1;
        this.lastName = lastName1;

    }
}

let myCustomer1 = new Customer1("Ashutosh","Shriansh");
console.log("FirstName is :   " + myCustomer1.firstName);
console.log("LastName is :   " + myCustomer1.lastName);