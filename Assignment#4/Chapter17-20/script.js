// QUESTION #1

let emptyMultiArray = [[], [], []];


// QUESTION #2


// let matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];


// QUESTION #3


// document.write("<h2>Counting from 1 to 10:</h2>");
// for (let i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }


// QUESTION #4


// let tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the table:"));

// document.write(`<h2>Multiplication Table of ${tableNumber}</h2>`);
// for (let i = 1; i <= tableLength; i++) {
//   document.write(`${tableNumber} × ${i} = ${tableNumber * i}<br>`);
// }



// QUESTION #5



// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// document.write("<h2>Fruits:</h2>");
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }




// QUESTION #6


// document.write("<h2>Series Generation</h2>");

// // a. Counting
// document.write("<h3>Counting:</h3>");
// for (let i = 1; i <= 15; i++) {
//   document.write(i + (i < 15 ? ", " : ""));
// }

// // b. Reverse counting
// document.write("<h3>Reverse Counting:</h3>");
// for (let i = 10; i >= 1; i--) {
//   document.write(i + (i > 1 ? ", " : ""));
// }

// // c. Even numbers
// document.write("<h3>Even Numbers:</h3>");
// for (let i = 0; i <= 20; i += 2) {
//   document.write(i + (i < 20 ? ", " : ""));
// }

// // d. Odd numbers
// document.write("<h3>Odd Numbers:</h3>");
// for (let i = 1; i <= 19; i += 2) {
//   document.write(i + (i < 19 ? ", " : ""));
// }

// // e. Series with k
// document.write("<h3>Series with k:</h3>");
// for (let i = 2; i <= 20; i += 2) {
//   document.write(i + "k" + (i < 20 ? ", " : ""));
// }




// QUESTION #7




// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Welcome to ABC Bakery. What do you want to order?");

// let found = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === searchItem.toLowerCase()) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(`${searchItem} is available at index ${A.indexOf(searchItem)} in our bakery.`);
// } else {
//   alert(`We are sorry. ${searchItem} is not available in our bakery.`);
// }





// QUESTION #8


// let numbers = [24, 53, 78, 91, 12];
// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

// document.write("<h2>Largest Number:</h2>");
// document.write(`The largest number in [${numbers.join(", ")}] is ${largest}`);




// QUESTION #9




// let numbers = [24, 53, 78, 91, 12];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }

// document.write("<h2>Smallest Number:</h2>");
// document.write(`The smallest number in [${numbers.join(", ")}] is ${smallest}`);




// QUESTION 10

// document.write("<h2>Multiples of 5 (1 to 100):</h2>");
// for (let i = 5; i <= 100; i += 5) {
//   document.write(i + "<br>");
// }