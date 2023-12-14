var numbers = [11, 22, 33, 44, 55];
var digit = 0;
for (var i = 0; i < numbers.length; i++) {
    digit += numbers[i];
}
console.log("Sum is total :  " + digit);
var average = 0;
average = digit / numbers.length;
console.log("average is " + average);
