// // 1. City welcome message

// var city = prompt("Enter city name:");
// if (city && city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome to " + (city || "your city"));
// }

// // 2. Gender greeting

// var gender = prompt("Enter your gender (male/female):");
// if (gender) {
//     gender = gender.toLowerCase();
//     if (gender === "male") {
//         alert("Good Morning Sir.");
//     } else if (gender === "female") {
//         alert("Good Morning Ma’am.");
//     } else {
//         alert("Good Morning.");
//     }
// } else {
//     alert("Good Morning.");
// }

// // 3. Traffic signal message

// var signalColor = prompt("Enter traffic signal color (red/yellow/green):");
// if (signalColor) {
//     signalColor = signalColor.toLowerCase();
//     if (signalColor === "red") {
//         alert("Must Stop");
//     } else if (signalColor === "yellow") {
//         alert("Ready to move");
//     } else if (signalColor === "green") {
//         alert("Move now");
//     } else {
//         alert("Invalid color");
//     }
// } else {
//     alert("No signal color entered");
// }


// // 4. Fuel check

// var fuel = prompt("Enter remaining fuel in your car (in litres):");
// fuel = parseFloat(fuel);
// if (!isNaN(fuel)) {
//     if (fuel < 0.25) {
//         alert("Please refill the fuel in your car");
//     } else {
//         alert("Fuel level is sufficient");
//     }
// } else {
//     alert("Invalid fuel input");
// }

// // 5. Alert message checks

// // a

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// // b

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// // c

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// // d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// // e

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// // f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// // 6. Marks and grade calculator

// var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));

// if (!isNaN(marks1) && !isNaN(marks2) && !isNaN(marks3) && !isNaN(totalMarks) && totalMarks > 0) {
//     var obtained = marks1 + marks2 + marks3;
//     var percentage = (obtained / totalMarks) * 100;
//     var grade, remarks;

//     if (percentage >= 90) {
//         grade = "A-One";
//         remarks = "Excellent";
//     } else if (percentage >= 80) {
//         grade = "A";
//         remarks = "Good";
//     } else if (percentage >= 70) {
//         grade = "B+";
//         remarks = "You need to improve";
//     } else if (percentage >= 60) {
//         grade = "B";
//         remarks = "You need to improve";
//     } else if (percentage >= 50) {
//         grade = "C";
//         remarks = "You need to improve";
//     } else {
//         grade = "Fail";
//         remarks = "Sorry";
//     }

//     alert(
//         "Total Marks: " + totalMarks + "\n" +
//         "Marks Obtained: " + obtained + "\n" +
//         "Percentage: " + percentage.toFixed(2) + "%\n" +
//         "Grade: " + grade + "\n" +
//         "Remarks: " + remarks
//     );
// } else {
//     alert("Invalid marks or total marks input.");
// }

// // 7. Guess game

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var guess = parseInt(prompt("Guess the secret number between 1 and 10:"));

// if (!isNaN(guess)) {
//     if (guess === secretNumber) {
//         alert("Bingo! Correct answer");
//     } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//         alert("Close enough to the correct answer");
//     } else {
//         alert("Try again! The secret number was " + secretNumber);
//     }
// } else {
//     alert("Invalid guess");
// }

// // 8. Check divisible by 3

// var num = parseInt(prompt("Enter a number to check if divisible by 3:"));
// if (!isNaN(num)) {
//     if (num % 3 === 0) {
//         alert(num + " is divisible by 3");
//     } else {
//         alert(num + " is not divisible by 3");
//     }
// } else {
//     alert("Invalid input");
// }

// // 9. Check even or odd

// var number = parseInt(prompt("Enter a number to check even or odd:"));
// if (!isNaN(number)) {
//     if (number % 2 === 0) {
//         alert(number + " is even");
//     } else {
//         alert(number + " is odd");
//     }
// } else {
//     alert("Invalid input");
// }

// // 10. Temperature message

// var temp = parseFloat(prompt("Enter temperature in Celsius:"));
// if (!isNaN(temp)) {
//     if (temp > 40) {
//         alert("It is too hot outside.");
//     } else if (temp > 30) {
//         alert("The Weather today is Normal.");
//     } else if (temp > 20) {
//         alert("Today’s Weather is cool.");
//     } else if (temp > 10) {
//         alert("OMG! Today’s weather is so Cool.");
//     } else {
//         alert("It is very cold outside.");
//     }
// } else {
//     alert("Invalid temperature input");
// }

// // 11. Simple calculator

// var firstNum = parseFloat(prompt("Enter first number:"));
// var secondNum = parseFloat(prompt("Enter second number:"));
// var operation = prompt("Enter operation (+, -, *, /, %):");

// if (!isNaN(firstNum) && !isNaN(secondNum)) {
//     var result;
//     if (operation === "+") {
//         result = firstNum + secondNum;
//     } else if (operation === "-") {
//         result = firstNum - secondNum;
//     } else if (operation === "*") {
//         result = firstNum * secondNum;
//     } else if (operation === "/") {
//         if (secondNum !== 0) {
//             result = firstNum / secondNum;
//         } else {
//             alert("Division by zero is not allowed");
//             result = null;
//         }
//     } else if (operation === "%") {
//         if (secondNum !== 0) {
//             result = firstNum % secondNum;
//         } else {
//             alert("Modulo by zero is not allowed");
//             result = null;
//         }
//     } else {
//         alert("Invalid operation");
//         result = null;
//     }

//     if (result !== null) {
//         alert("Result: " + result);
//     }
// } else {
//     alert("Invalid number inputs");
// }
