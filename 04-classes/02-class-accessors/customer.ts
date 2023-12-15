class Customer{

    private _firstName: String;
    private _lastName: String;

    constructor(firstName1: String,lastName1: String){

        this._firstName = firstName1;
        this._lastName = lastName1;

    }

   public get firstName(): String {
    return this._firstName;
   } 

   public get lastName(): String {
    return this._lastName;
   } 

   public set firstName(value: String){
    this._firstName = value;
   }

   public set lastName(value: String){
    this._lastName = value;
   }
}

let myCustomer = new Customer("Ashutosh","Shriansh");
console.log("FirstName :::: "  + myCustomer.firstName);
console.log("LastName :::: "  + myCustomer.lastName);
