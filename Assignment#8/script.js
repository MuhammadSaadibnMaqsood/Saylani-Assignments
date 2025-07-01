// // Problem 1: Display current date and time
// const now = new Date();
// console.log(`Current date and time: ${now}`);

// // Problem 2: Alert current month in words
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// alert(`Current month: ${months[now.getMonth()]}`);

// // Problem 3: Alert first 3 letters of current day
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(`First 3 letters of current day: ${days[now.getDay()].substring(0, 3)}`);

// // Problem 4: Display "It's Fun day" if it's Saturday or Sunday
// if (now.getDay() === 0 || now.getDay() === 6) {
//     console.log("It's Fun day");
// } else {
//     console.log("It's a regular day");
// }

// // Problem 5: First or last days of month message
// if (now.getDate() < 16) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }

// // Problem 6: Minutes since midnight Jan 1, 1970
// const minutesSinceEpoch = Math.floor(now.getTime() / (1000 * 60));
// console.log(`Minutes since Jan 1, 1970: ${minutesSinceEpoch}`);

// // Problem 7: Test if it's before noon
// if (now.getHours() < 12) {
//     alert("Its AM");
// } else {
//     alert("Its PM");
// }

// // Problem 8: Date object for last day of last month of 2020
// const laterDate = new Date(2020, 11, 31); // Month is 0-indexed (11 = December)
// console.log(`Last day of last month of 2020: ${laterDate}`);

// // Problem 9: Days since 1st Ramadan (June 18, 2015)
// const ramadanStart = new Date(2015, 5, 18); // 5 = June (0-indexed)
// const timeDiff = now - ramadanStart;
// const daysSinceRamadan = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// alert(`Days since 1st Ramadan (June 18, 2015): ${daysSinceRamadan}`);

// // Problem 10: Seconds elapsed between reference date and beginning of 2015
// const start2015 = new Date(2015, 0, 1); // Jan 1, 2015
// const secondsElapsed = Math.floor((now - start2015) / 1000);
// console.log(`Seconds since beginning of 2015: ${secondsElapsed}`);

// // Problem 11: Extract hours, add 1 hour, display new date
// const dateObj = new Date();
// const currentHours = dateObj.getHours();
// dateObj.setHours(currentHours + 1);
// console.log(`Date object 1 hour ahead: ${dateObj}`);

// // Problem 12: Date reset to 100 years back
// const hundredYearsBack = new Date();
// hundredYearsBack.setFullYear(hundredYearsBack.getFullYear() - 100);
// alert(`Date 100 years back: ${hundredYearsBack}`);

// // Problem 13: Calculate birth year from age
// const age = parseInt(prompt("Enter your age:"));
// const currentYear = now.getFullYear();
// const birthYear = currentYear - age;
// console.log(`Your birth year is: ${birthYear}`);

// // Problem 14: K-Electric bill
// const customerName = prompt("Enter customer name:");
// const currentMonth = months[now.getMonth()];
// const units = parseFloat(prompt("Enter number of units consumed:"));
// const chargePerUnit = 16.5; // Example rate
// const netAmount = Math.round(units * chargePerUnit * 100) / 100;
// const lateSurcharge = Math.round(netAmount * 0.1 * 100) / 100; // 10% surcharge
// const grossAmount = Math.round((netAmount + lateSurcharge) * 100) / 100;

// console.log(`
// K-Electric Bill
// ----------------
// Customer Name: ${customerName}
// Current Month: ${currentMonth}
// Number of units: ${units}
// Charges per unit: ${chargePerUnit.toFixed(2)}
// Net Amount Payable (within Due Date): ${netAmount.toFixed(2)}
// Late Payment Surcharge: ${lateSurcharge.toFixed(2)}
// Gross Amount Payable (after Due Date): ${grossAmount.toFixed(2)}
// `);