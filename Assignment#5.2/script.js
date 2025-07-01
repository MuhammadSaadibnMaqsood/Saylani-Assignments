// // Problem 1: Merge first and last name and greet user
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// const fullName = firstName + " " + lastName;
// console.log(`Hello, ${fullName}!`);

// // Problem 2: Find length of favorite mobile phone model
// const phoneModel = prompt("Enter your favorite mobile phone model:");
// console.log(`The length of your input is: ${phoneModel.length}`);

// // Problem 3: Find index of 'n' in "Pakistani"
// const word3 = "Pakistani";
// console.log(`Index of 'n' in "${word3}": ${word3.indexOf('n')}`);

// // Problem 4: Find last index of 'l' in "Hello World"
// const word4 = "Hello World";
// console.log(`Last index of 'l' in "${word4}": ${word4.lastIndexOf('l')}`);

// // Problem 5: Find character at 3rd index in "Pakistani"
// const word5 = "Pakistani";
// console.log(`Character at 3rd index in "${word5}": ${word5.charAt(3)}`);

// // Problem 6: Repeat Problem 1 using concat()
// const fullName6 = firstName.concat(" ", lastName);
// console.log(`Hello (using concat()), ${fullName6}!`);

// // Problem 7: Replace "Hyder" with "Islam" in "Hyderabad"
// const word7 = "Hyderabad";
// console.log(`After replacement: ${word7.replace("Hyder", "Islam")}`);

// // Problem 8: Replace all "and" with "&"
// const message8 = "Ali and Sami are best friends. They play cricket and football together.";
// console.log(`After replacement: ${message8.replace(/and/g, "&")}`);

// // Problem 9: Convert string "472" to number
// const strNum = "472";
// const num = Number(strNum);
// console.log(`Value: ${num}, Type: ${typeof num}`);

// // Problem 10: Convert user input to uppercase
// const input10 = prompt("Enter some text to convert to uppercase:");
// console.log(`Uppercase: ${input10.toUpperCase()}`);

// // Problem 11: Convert user input to title case
// const input11 = prompt("Enter some text to convert to title case:");
// const titleCase = input11.toLowerCase().split(' ').map(word => 
//   word.charAt(0).toUpperCase() + word.slice(1)
// ).join(' ');
// console.log(`Title case: ${titleCase}`);

// // Problem 12: Convert number to string and remove dot
// const num12 = 35.36;
// const strNum12 = num12.toString().replace('.', '');
// console.log(`Result: ${strNum12}`);

// // Problem 13: Validate username (no special characters)
// let username;
// do {
//   username = prompt("Enter a username (no @, ., ,, !):");
//   if (/[@.,!]/.test(username)) {
//     alert("Invalid username. Please try again.");
//   }
// } while (/[@.,!]/.test(username));
// console.log(`Valid username: ${username}`);

// // Problem 14: Search in array (case insensitive)
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// const searchItem = prompt("Search for an item in our menu:").toLowerCase();
// const found = A.some(item => item.toLowerCase() === searchItem);
// console.log(found ? `${searchItem} is available!` : `${searchItem} is not available.`);

// // Problem 15: Password validation
// let password;
// do {
//   password = prompt("Enter a password (must: contain letters & numbers, not start with number, be ≥6 chars):");
//   const hasLetter = /[a-zA-Z]/.test(password);
//   const hasNumber = /[0-9]/.test(password);
//   const startsWithNumber = /^[0-9]/.test(password);
  
//   if (!hasLetter || !hasNumber || startsWithNumber || password.length < 6) {
//     alert("Invalid password. Please try again.");
//   }
// } while (
//   !/[a-zA-Z]/.test(password) || 
//   !/[0-9]/.test(password) || 
//   /^[0-9]/.test(password) || 
//   password.length < 6
// );
// console.log("Password is valid!");

// // Problem 16: Convert string to array using split()
// const university = "University of Karachi";
// const uniArray = university.split(' ');
// console.log("Array elements:", uniArray);

// // Problem 17: Display last character of user input
// const input17 = prompt("Enter some text to see its last character:");
// console.log(`Last character: ${input17.charAt(input17.length - 1)}`);

// // Problem 18: Count occurrences of "the"
// const sentence = "The quick brown fox jumps over the lazy dog";
// const lowerSentence = sentence.toLowerCase();
// const countThe = (lowerSentence.match(/the/g) || []).length;
// console.log(`Occurrences of "the": ${countThe}`);