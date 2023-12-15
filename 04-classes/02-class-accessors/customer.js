var Customer = /** @class */ (function () {
    function Customer(firstName1, lastName1) {
        this._firstName = firstName1;
        this._lastName = lastName1;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Ashutosh", "Shriansh");
console.log("FirstName :::: " + myCustomer.firstName);
console.log("LastName :::: " + myCustomer.lastName);
