var numbers = [11, 22, 33, 44, 55];
var digit = 0;
for (var i = 0; i < numbers.length; i++) {
    digit += numbers[i];
}
console.log("Sum is total :  " + digit);
var average = 0;
average = digit / numbers.length;
console.log("average is " + average);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var digits = numbers_1[_i];
    digits += digits;
    console.log("printing digits sum  ::: " + digits); //not adding all elements when using enhanced for loop....
}
var sports = ["basketball", "volleyball", "football", "cricket"];
console.log("Sports list ::::: " + sports);
sports.push("handball");
sports.push("tennis");
console.log("Updtaed Sports list ::::: " + sports);
