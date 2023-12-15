class Customer13{

    firstName: String;
    lastName: String;

    constructor(firstName1: String,lastName1: String){

        this.firstName = firstName1;
        this.lastName = lastName1;

    }
}

let myCustomer13 = new Customer13("Ashutosh","Shriansh");
console.log("FirstName is :   " + myCustomer13.firstName);
console.log("LastName is :   " + myCustomer13.lastName);