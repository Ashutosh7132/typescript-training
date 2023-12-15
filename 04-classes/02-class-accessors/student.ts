class student{

    constructor(private _firstName: String, private _lastName:String ){

        this._firstName=_firstName;
        this._lastName=_lastName;
    }

    public get firstName() : String{
        return this._firstName;
    }

    public get lastName() : String{
        return this._lastName;
    }
}

let myStudent = new student("Anvesh","Shriansh");
let myStudent1 = new student("Atharv","Shriansh");
console.log("My First Son Name is :  " + myStudent.firstName + " " + myStudent.lastName);
console.log("My Second Son Name is :  " + myStudent1.firstName+ "  " + myStudent1.lastName);