// QUESTION 1-7




// // 1. Empty array using literal notation
// let studentNamesLiteral = [];

// // 2. Empty array using object notation
// let studentNamesObject = new Array();

// // 3. Strings array
// let stringsArray = ["apple", "banana", "cherry"];

// // 4. Numbers array
// let numbersArray = [10, 20, 30, 40];

// // 5. Boolean array
// let booleanArray = [true, false, true, true];

// // 6. Mixed array
// let mixedArray = ["text", 42, true, null, {name: "John"}];

// // 7. Education qualifications in Pakistan
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// qualifications.forEach(qual => {
//   document.write(`<li>${qual}</li>`);
// });
// document.write("</ul>");




// QUESTION 8 



// let students = ["Ali", "Bilal", "Chaudhry"];
// let scores = [430, 380, 490];
// let totalMarks = 500;

// document.write("<h2>Student Results</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Student</th><th>Score</th><th>Percentage</th></tr>");

// for (let i = 0; i < students.length; i++) {
//   let percentage = (scores[i] / totalMarks) * 100;
//   document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td><td>${percentage.toFixed(2)}%</td></tr>`);
// }

// document.write("</table>");





// QUESTION 9 



// let colors = ["Red", "Green", "Blue"];

// // Display initial array
// document.write("<h2>Initial Colors:</h2>");
// document.write(colors.join(", ") + "<br><br>");

// // a. Add to beginning
// let colorToAddStart = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddStart);
// document.write("<h3>After adding to beginning:</h3>");
// document.write(colors.join(", ") + "<br><br>");

// // b. Add to end
// let colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);
// document.write("<h3>After adding to end:</h3>");
// document.write(colors.join(", ") + "<br><br>");

// // c. Add two more to beginning
// colors.unshift("Purple", "Orange");
// document.write("<h3>After adding two more to beginning:</h3>");
// document.write(colors.join(", ") + "<br><br>");

// // d. Delete first color
// colors.shift();
// document.write("<h3>After deleting first color:</h3>");
// document.write(colors.join(", ") + "<br><br>");

// // e. Delete last color
// colors.pop();
// document.write("<h3>After deleting last color:</h3>");
// document.write(colors.join(", ") + "<br><br>");

// // f. Add at specific index
// let addIndex = parseInt(prompt("At which index do you want to add a color?"));
// let colorToAdd = prompt("Enter the color to add:");
// colors.splice(addIndex, 0, colorToAdd);
// document.write("<h3>After adding at specific index:</h3>");
// document.write(colors.join(", ") + "<br><br>");

// // g. Delete from specific index
// let deleteIndex = parseInt(prompt("At which index do you want to delete color(s)?"));
// let deleteCount = parseInt(prompt("How many colors do you want to delete?"));
// colors.splice(deleteIndex, deleteCount);
// document.write("<h3>After deleting from specific index:</h3>");
// document.write(colors.join(", ") + "<br><br>");





// QUESTION 10 



// let studentScores = [320, 230, 480, 120];
// studentScores.sort((a, b) => a - b);
// document.write("<h2>Sorted Scores:</h2>");
// document.write(studentScores.join(", "));




// QUESTION 11


// let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// let selectedCities = cities.slice(0, 3);
// document.write("<h2>Selected Cities:</h2>");
// document.write(selectedCities.join(", "));




// QUESTION 12


// let arr = ["This ", " is ", " my ", " cat"];
// let sentence = arr.join("");
// document.write("<h2>Combined String:</h2>");
// document.write(sentence);




// QUESTION 13


// let fifoArray = [];
// fifoArray.push("First"); // Add to end
// fifoArray.push("Second");
// fifoArray.push("Third");

// // Access in order (first in first out)
// document.write("<h2>FIFO Access:</h2>");
// while (fifoArray.length > 0) {
//   document.write(fifoArray.shift() + "<br>"); // Remove from beginning
// }



// QUESTION 14



// let lifoArray = [];
// lifoArray.push("First"); // Add to end
// lifoArray.push("Second");
// lifoArray.push("Third");

// // Access in reverse order (last in first out)
// document.write("<h2>LIFO Access:</h2>");
// while (lifoArray.length > 0) {
//   document.write(lifoArray.pop() + "<br>"); // Remove from end
// }




// QUESTION 15



// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<h2>Phone Manufacturers</h2>");
// document.write("<select>");
// manufacturers.forEach(manufacturer => {
//   document.write(`<option value="${manufacturer.toLowerCase()}">${manufacturer}</option>`);
// });
// document.write("</select>");

