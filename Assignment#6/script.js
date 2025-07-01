
// // 1. Positive integer input and round, floor, ceil
// let positiveInput = +prompt("1. Enter a positive integer:");
// document.write(`<h2>Task 1: Positive Integer</h2>`);
// document.write(`a. Number: ${positiveInput}<br>`);
// document.write(`b. Round off value: ${Math.round(positiveInput)}<br>`);
// document.write(`c. Floor value: ${Math.floor(positiveInput)}<br>`);
// document.write(`d. Ceil value: ${Math.ceil(positiveInput)}<br><hr>`);

// // 2. Negative floating point input
// let negativeFloat = +prompt("2. Enter a negative floating-point number:");
// document.write(`<h2>Task 2: Negative Floating Point</h2>`);
// document.write(`a. Number: ${negativeFloat}<br>`);
// document.write(`b. Round off value: ${Math.round(negativeFloat)}<br>`);
// document.write(`c. Floor value: ${Math.floor(negativeFloat)}<br>`);
// document.write(`d. Ceil value: ${Math.ceil(negativeFloat)}<br><hr>`);

// // 3. Absolute value
// let absInput = +prompt("3. Enter any number to see its absolute value:");
// document.write(`<h2>Task 3: Absolute Value</h2>`);
// document.write(`The absolute value of ${absInput} is ${Math.abs(absInput)}<br><hr>`);

// // 4. Dice simulation
// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.write(`<h2>Task 4: Dice Simulation</h2>`);
// document.write(`Random dice value: ${diceValue}<br><hr>`);

// // 5. Coin toss simulation
// let coin = Math.random() < 0.5 ? "Heads" : "Tails";
// document.write(`<h2>Task 5: Coin Toss</h2>`);
// document.write(`Random coin value: ${coin}<br><hr>`);

// // 6. Random number between 1 and 100
// let randomNum = Math.floor(Math.random() * 100) + 1;
// document.write(`<h2>Task 6: Random Number (1-100)</h2>`);
// document.write(`Random number between 1 and 100: ${randomNum}<br><hr>`);

// // 7. Weight parsing
// let weightInput = prompt("7. Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
// let parsedWeight = parseFloat(weightInput);
// document.write(`<h2>Task 7: User Weight</h2>`);
// document.write(`Your weight is: ${parsedWeight} kilograms<br><hr>`);

// // 8. Secret number game
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = +prompt("8. Guess the secret number between 1 and 10:");
// document.write(`<h2>Task 8: Secret Number Game</h2>`);
// if (userGuess === secretNumber) {
//     document.write(`Congratulations! You guessed the secret number ${secretNumber}!`);
// } else {
//     document.write(`Sorry! The secret number was ${secretNumber}. Better luck next time!`);
// }

