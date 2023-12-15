"use strict";
var student = /** @class */ (function () {
    function student(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return student;
}());
var myStudent = new student("Anvesh", "Shriansh");
var myStudent1 = new student("Atharv", "Shriansh");
console.log("My First Son Name is :  " + myStudent.firstName + " " + myStudent.lastName);
console.log("My Second Son Name is :  " + myStudent1.firstName + "  " + myStudent1.lastName);
