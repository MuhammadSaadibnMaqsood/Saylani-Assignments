
// // 1. Function that returns the sum of an array
// function sumArray(numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num;
//   }
//   return sum;
// }
// let nums1 = [1, 2, 3, 4, 5];
// document.write("<h2>1. Sum of Array</h2>");
// document.write("Array: " + nums1 + "<br>");
// document.write("Sum: " + sumArray(nums1) + "<hr>");

// // 2. Function that reverses a string
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// let str1 = "hello";
// document.write("<h2>2. Reverse String</h2>");
// document.write("Original: " + str1 + "<br>");
// document.write("Reversed: " + reverseString(str1) + "<hr>");

// // 3. Function to find the largest number in an array
// function findLargestNumber(numbers) {
//   let largest = numbers[0];
//   for (let num of numbers) {
//     if (num > largest) {
//       largest = num;
//     }
//   }
//   return largest;
// }
// let nums2 = [5, 8, 2, 9, 1];
// document.write("<h2>3. Largest Number</h2>");
// document.write("Array: " + nums2 + "<br>");
// document.write("Largest: " + findLargestNumber(nums2) + "<hr>");

// // 4. Function to count number of vowels in a string
// function countVowels(str) {
//   let count = 0;
//   let vowels = 'aeiouAEIOU';
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// let str2 = "Hello World";
// document.write("<h2>4. Vowel Count</h2>");
// document.write("String: " + str2 + "<br>");
// document.write("Vowel Count: " + countVowels(str2) + "<hr>");

// // 5. Function to remove duplicates from an array
// function removeDuplicates(arr) {
//   let unique = [];
//   for (let item of arr) {
//     if (!unique.includes(item)) {
//       unique.push(item);
//     }
//   }
//   return unique;
// }
// let nums3 = [1, 2, 2, 3, 4, 4, 5];
// document.write("<h2>5. Remove Duplicates</h2>");
// document.write("Original Array: " + nums3 + "<br>");
// document.write("Unique Array: " + removeDuplicates(nums3) + "<hr>");

// // 6. Function to capitalize first letter of each word
// function capitalizeWords(sentence) {
//   let words = sentence.split(' ');
//   let capitalized = words.map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalized.join(' ');
// }
// let sentence = "hello world from javascript";
// document.write("<h2>6. Capitalize Words</h2>");
// document.write("Original: " + sentence + "<br>");
// document.write("Capitalized: " + capitalizeWords(sentence) + "<hr>");

