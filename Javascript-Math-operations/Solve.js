/***** 1. Check if a Number is Divisible by 3 and 5 *****/ 

// function divisibleByThreeAndFive(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("This number is divisible by 3 and 5 =>", num);
//     } else {
//         console.log("Not divisible by both 3 and 5 =>", num);
//     }
// }
// divisibleByThreeAndFive(5);

/***** 2. Find the Factorial of a Number *****/ 

// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(`Factorial of 4 is => ${factorial(4)}`);

/***** 3. Check if a Number is Even or Odd *****/ 

// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         console.log("This is an Even number:", num);
//     } else {
//         console.log("This is an Odd number:", num);
//     }
// }
// checkEvenOdd(2);

/***** 4. Print Numbers from 1 to N *****/ 

// function printNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// printNumbers(5);

/***** 5. Find the Square of a Number *****/ 

// function square(num) {
//     return num * num;
// }
// console.log(`Square of 5 is => ${square(5)}`);

/***** 6. Sum of All Even Numbers in an Array *****/ 

// function sumOfEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenSum = sumOfEvenNumbers(numbers);
// console.log("Sum of even numbers in array:", evenSum);

/***** 7. Sum of First N Natural Numbers *****/ 

// function sumOfNaturalNumbers(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// const number = 10;
// console.log(`The sum of the first ${number} natural numbers is: ${sumOfNaturalNumbers(number)}`);

/*****  8. Sum of All Odd Numbers in an Array *****/ 

// function sumOfOddNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// const numArr = [1,2,3,4,5,6,7,8,9,10];
// const OddSum = sumOfOddNumbers(numArr);
// console.log("Sum of odd numbers in array:", OddSum);