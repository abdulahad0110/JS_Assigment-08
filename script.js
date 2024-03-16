document.write("<h2>Task 1</h2>");

var inputChar = prompt("Enter a character (number or string):");

if (!isNaN(inputChar)) {
    document.write("The input is a number.");
} else if (inputChar.charCodeAt(0) >= 65 && inputChar.charCodeAt(0) <= 90) {
    document.write("The input is an uppercase letter.");
} else if (inputChar.charCodeAt(0) >= 97 && inputChar.charCodeAt(0) <= 122) {
    document.write("The input is a lowercase letter.");
} else {
    document.write("The input is neither a number nor a letter.");
}


document.write("<h2>Task 2</h2>");

var num1 = parseInt(prompt("Enter the first Number:"));
var num2 = parseInt(prompt("Enter the second Number:"));


if (num1 > num2) {
    document.write(num1 + " is Larger than " + num2);
} else if (num1 < num2) {
    document.write(num1 + " is Smaller than " + num2);
} else {
    document.write(num1 + " Both are equal numbers " + num2);
}



document.write("<h2>Task 3</h2>");

var number = parseInt(prompt("Enter Any Number to check this is (Negative/Positive):"));

if(number > 0) {
    document.write(number + " is positive Number");
} else if(number < 0) {    
    document.write(number + " is Negative Number");
} else {    
    document.write(number + " is Neutral Number");
}



document.write("<h2>Task 4</h2>");

var char = prompt("Enter a character (string of length 1):").toLocaleLowerCase();

if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    document.write("The character '" + char + "' is a vowel.");
} else {
    document.write("The character '" + char + "' is not a vowel.");
}


document.write("<h2>Task 5</h2>");

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
document.write(greeting);