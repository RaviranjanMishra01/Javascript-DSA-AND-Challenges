/***** 01. Find the Maximum of Three Numbers *****/

// let num1 = 120;
// let num2 = 90;
// let num3 = 80;
// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log("this is grater number => ", num1);
//     } else {
//         console.log("this is grater number =>", num3);
//     }
// } else if (num2 > num3) {
//     console.log("this is grater number =>", num2);
// } else {
//     console.log("this is grater number =>", num3);
// }

/* output => "this is grater number =>  120"*/


/***** 02. Check if a Number is Positive, Negative, or Zero *****/

// let number = 0;
// if(number > 0)
// {
//     console.log("this is positive number => ",number);
// }else if(number < 0)
// {
//     console.log("this is negative number => ",number);
// }else{
//     console.log("this is equal to 0 == ",number);
// }

/* output => "this is equal to 0 ==  0" */

/***** 03. Calculate Electricity Bill *****/
/*
    Example Logic:

    0–100 units → ₹5 per unit
    101–200 units → ₹7 per unit
    201–300 units → ₹10 per unit
    Above 300 units → ₹12 per unit
*/

// let unit = 45;
// if (unit < 0) {
//     console.log("not valid unit ", unit);
// } else if (unit <= 100 && unit > 0) {
//     console.log("your total bill is => ", unit * 5);
// } else if (unit > 100 && unit <= 200) {
//     console.log("your bill is => ", unit * 7);
// } else if (unit > 200 && unit <= 300) {
//     console.log("your bill is => ", unit * 10);
// } else {
//     console.log("your bill is  => ", unit * 12);
// }

/* output => "your total bill is =>  225" */


/***** 04. Check if a Character is a Vowel or Consonant *****/

// let Character = "A";
// Character = Character.toLowerCase();
// let vowels = "aeiou";
// if (Character.length !== 1 || !isNaN(Character)) {
//     console.log("Not valid input:", Character);
// } else {
//     if (vowels.includes(Character)) {
//         console.log("This character is vowel =>", Character);
//     } else {
//         console.log("This character is consonant =>", Character);
//     }
// }

/* output => "This character is vowel => a"*/

/***** 05. Check if a Year is a Leap Year *****/

// let year = 2005;
// if (year <= 0) {
//     console.log("not a valid year");
// } else {
//     if (year % 400 === 0) {
//         console.log("this is leap year =>", year);
//     } else if (year % 100 === 0) {
//         console.log("this is not a leap year =>", year);
//     } else if (year % 4 === 0) {
//         console.log("this is leap year =>", year);
//     } else {
//         console.log("this is not a leap year =>", year);
//     }
// }

/* output => "this is not a leap year => 2005" */

/***** 06. Check if a Character is Uppercase, Lowercase, Digit, or Special Character *****/

// let character = "1"
// if (character.length === 1) {
//     let temp = character.charCodeAt()
//     if (temp >= 65 && temp <= 90) {
//         console.log("Character is Uppercase => ", character, "ASCII value is => ", temp);
//     } else if (temp >= 97 && temp <= 122) {
//         console.log("Character is lowercase => ", character, "ASCII value is => ", temp);
//     } else if (temp >= 48 && temp <= 57) {
//         console.log("this is a number =>", character, "ASCII value is => ", temp);
//     } else if (temp >= 0 || temp <= 47 || temp >= 58 || temp <= 64 || temp >= 91 || temp <= 96 || temp >= 123 || temp <= 127) {
//         console.log("these are special characters => ", character, "ASCII value is => ", temp);
//     } else {
//         console.log("not valid input");

//     }
// }else{
//     console.log("not valid input => ",character);
// }

/* output => "this is a number => 1 ASCII value is =>  49" */

/***** 08. Calculate Income Tax Based on Slabs *****/

/*
    Example Logic (example slabs):

    Up to ₹2,50,000 → No tax
    ₹2,50,001 – ₹5,00,000 → 5%
    ₹5,00,001 – ₹10,00,000 → 20%
    Above ₹10,00,000 → 30%

*/

// let income = 750000;
// let tax = 0;

// if (income <= 250000) {
//     tax = 0;
// }else if (income <= 500000) {
//     tax = (income - 250000) * 0.05;
// }else if (income <= 1000000) {
//     tax = (250000 * 0.05) + (income - 500000) * 0.20;
// }else {
//     tax = (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30;
// }
// console.log("Total Income Tax =", tax);


/* output => "Total Income Tax = 62500" */
