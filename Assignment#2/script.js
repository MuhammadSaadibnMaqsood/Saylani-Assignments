// Question #1 

// var percentage = 85; 
// find the grade based on percentage
// var grade;
// if (percentage >= 90 && percentage <= 99) {
//     grade = "A-One";
// } else if (percentage >= 80 && percentage <= 89) {
//     grade = "A";
// } else if (percentage >= 70 && percentage <= 79) {
//     grade = "B+";
// } else if (percentage >= 60 && percentage <= 69) {
//     grade = "B";
// } else if (percentage >= 50 && percentage <= 59) {
//     grade = "C";
// } else {
//     grade = "Fail";
// }

// Display the result
// document.write("Your percentage is: " + percentage + "%<br>");
// document.write("Your grade is: " + grade);

// Question #2

// var a = 10;

// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br><br>");

// Pre-increment
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment
// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// Question #3 

// var a = 2, b = 1;

// document.write("Initial value of a: " + a + "<br>");
// document.write("Initial value of b: " + b + "<br><br>");


// var step1 = --a; // a = 1
// document.write("After --a, a = " + a + " (step1: " + step1 + ")<br>");


// var step2 = --b; // b = 0
// document.write("After --b, b = " + b + " (step2: " + step2 + ")<br>");

// var step3 = step1 - step2; // 1 - 0
// document.write("After --a - --b, result = " + step3 + "<br>");

// var step4 = ++b; // b = 1
// document.write("After ++b, b = " + b + " (step4: " + step4 + ")<br>");


// var step5 = b--; // use b=1 then b=0
// document.write("After b--, used b = " + step5 + ", now b = " + b + "<br>");

// var result = step1 - step2 + step4 + step5;
// document.write("<br>Final result: " + result + "<br>");
// document.write("Final value of a: " + a + "<br>");
// document.write("Final value of b: " + b + "<br>");

// Question #4 

// // 4. Take input from user and greet
// var userName = prompt("Enter your name:");
// alert("Hello, " + userName + "! Welcome to the site!");

// // 5. Multiplication table
// var userNumber = prompt("Enter a number to display its multiplication table (default is 5):");

// // If user cancels or enters nothing, use default 5
// if (!userNumber) {
//     userNumber = 5;
// }

// userNumber = parseInt(userNumber);

// document.write("<h2>Multiplication Table of " + userNumber + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(userNumber + " x " + i + " = " + (userNumber * i) + "<br>");
// }

// // 6. Subjects and marks calculation

// // a) Take three subjects name
// var subject1 = prompt("Enter name of first subject:");
// var subject2 = prompt("Enter name of second subject:");
// var subject3 = prompt("Enter name of third subject:");

// // b) Total marks for each subject
// var totalMarksPerSubject = 100;

// // c) Take obtained marks
// var obtained1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtained2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtained3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// // d) Total calculation
// var totalMarks = totalMarksPerSubject * 3;
// var totalObtained = obtained1 + obtained2 + obtained3;
// var percentage = (totalObtained / totalMarks) * 100;

// // e) Display result in table format
// document.write("<h2>Result</h2>");
// document.write("<table border='1' cellspacing='0' cellpadding='5'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th></tr>");
// document.write("</table>");
// document.write("<br><strong>Percentage:</strong> " + percentage.toFixed(2) + "%");
