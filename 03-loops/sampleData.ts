let numbers: number[] = [11,22,33,44,55];
let digit: number = 0;
for(let i=0;i< numbers.length;i++)
{
 digit += numbers[i];
}
console.log("Sum is total :  " + digit);
let average: number = 0;

average = digit/numbers.length;
console.log("average is "   + average);

for(let digits of numbers){

    digits += digits;
    console.log("printing digits sum  ::: " + digits); //not adding all elements when using enhanced for loop....
    
}

let sports: String[] = ["basketball","volleyball","football","cricket"];
console.log("Sports list ::::: "  + sports);
sports.push("handball");
sports.push("tennis");
console.log("Updtaed Sports list ::::: "  + sports);


