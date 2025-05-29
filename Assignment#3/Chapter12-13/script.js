// // 1. Check character type (number, uppercase, lowercase)

// var inputChar = prompt("Enter a single character (number or letter):");
// if (inputChar && inputChar.length === 1) {
//     var ascii = inputChar.charCodeAt(0);
//     if (ascii >= 48 && ascii <= 57) {
//         alert(inputChar + " is a Number");
//     } else if (ascii >= 65 && ascii <= 90) {
//         alert(inputChar + " is an Uppercase letter");
//     } else if (ascii >= 97 && ascii <= 122) {
//         alert(inputChar + " is a Lowercase letter");
//     } else {
//         alert(inputChar + " is neither a number nor an alphabet letter");
//     }
// } else {
//     alert("Please enter exactly one character.");
// }

// // 2. Compare two integers

// var int1 = parseInt(prompt("Enter first integer:"));
// var int2 = parseInt(prompt("Enter second integer:"));

// if (!isNaN(int1) && !isNaN(int2)) {
//     if (int1 > int2) {
//         alert(int1 + " is larger");
//     } else if (int2 > int1) {
//         alert(int2 + " is larger");
//     } else {
//         alert("Both integers are equal");
//     }
// } else {
//     alert("Invalid input(s)");
// }

// // 3. Number positive, negative or zero

// var number = parseFloat(prompt("Enter a number:"));
// if (!isNaN(number)) {
//     if (number > 0) {
//         alert(number + " is positive");
//     } else if (number < 0) {
//         alert(number + " is negative");
//     } else {
//         alert("Number is zero");
//     }
// } else {
//     alert("Invalid input");
// }

// // 4. Check if character is vowel

// var char = prompt("Enter a single character:");
// if (char && char.length === 1) {
//     var vowels = "aeiouAEIOU";
//     if (vowels.includes(char) !== -1) {
//         alert(true);
//     } else {
//         alert(false);
//     }
// } else {
//     alert("Please enter exactly one character.");
// }

// // 5. Password validation

// var correctPassword = "mySecret123";
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// // 6. Fix if/else statement

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// alert(greeting);

// // 7. Time input and greeting based on 24-hour format

// var timeInput = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");
// var time = parseInt(timeInput);
// if (!isNaN(time) && time >= 0 && time <= 2359) {
//     if (time >= 0 && time < 1200) {
//         alert("Good morning");
//     } else if (time >= 1200 && time < 1700) {
//         alert("Good afternoon");
//     } else if (time >= 1700 && time < 2100) {
//         alert("Good evening");
//     } else {
//         alert("Good night");
//     }
// } else {
//     alert("Invalid time input");
// }
