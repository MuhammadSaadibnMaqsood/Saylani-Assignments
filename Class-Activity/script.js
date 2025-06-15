// Question #1



//  let DOB  = prompt('Enter your BY');

// current_ywar = 2025;

// age = current_ywar - DOB;

// alert(age);


// Questin #2 

// let arr = []

// for (let i = 0; i < 5; i++) {
//    num = +prompt('Enter a num: ');

//    arr.push(num)
    
// }
// let sum = 0
// for (let i = 0; i < 5; i++) {
//    sum +=arr[i];

// }
// let avg = sum/arr.length;

// alert(avg);

// Question #3


// let arr =[1,2,3,4,5,6,7,8,9,10];
// divisibleBYThree = []
// arr.map((num)=>{
//     if(num %3 == 0){
//         divisibleBYThree.push(num)
//     }
// })
// console.log(divisibleBYThree);

// alert('NUM DIVISIBLE BY THREE IS: '+divisibleBYThree);

// Question #4 

// num = +prompt("Enter a num for facotrail: ");

// let fac= 1
// for (let i = 1; i <= num; i++) {
    
//     fac *= i;
    
// }
// alert(fac)


// Question #5 

// let input = prompt('Enter a string');
// let str = []
// for (let i = input.length; i > -1; i--) {

//     // console.log(i);
//     str.push(input[i]);
    
    
    
    
    
// }
// alert(str)


// Question #6 
// let string = prompt('Enter a String');
// let char = prompt('Enter a char');

// let num = 0
// for (let i = 0; i < string.length; i++) {
//     if(string[i] == char){
//         num++
//     }
    
// }
// alert('Character appearance: '+num)


// Question #7

// let num = +prompt('Enter a num');

// for (let i = 1; i <= 10; i++) {
//     console.log(num + ' '+'x' +' ' +i+' '+ i*num);
    
    
// }


// Question #8 
// let names=[]
// for (let i = 0; i < 5; i++) {
//     let input = prompt('Enter name');
//     names.push(input)
    
// }

// console.log(names.sort());

// Question #9 


// let input = prompt('Enter a string');
// let vowelContain = 0
// for (let i = 0; i < input.length; i++) {
//     if(input[i] ==='a'||input[i] ==='e'||input[i] ==='i'||input[i] ==='o'||input[i] ==='u'){
//         vowelContain++
//     }
    
// }
// console.log(vowelContain);


// Question #10 

// let product = ['Laptop','Phone','Computer'];
// let price = [50000,30000,60000];

// for (let i = 0; i < product.length; i++) {
//     console.log(product[i]+' '+ price[i]);
    
    
// }


// Question #11

// let input = prompt('Enter a word');

// let reverse = input.split('').reverse().join('');

// if(input.toLowerCase() == reverse.toLowerCase()){
//     console.log('String is palindorme');
    
// }else{
//       console.log('String is not palindorme');
// }