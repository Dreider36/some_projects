//Bubble sorting

//const arr1 = [3, 4, 1, 8, 1]

// function sort(arr) {
//     let result = [...arr];
//     for (let j = 0; j < arr1.length; j++) {
//         for (let i=0; i < result.length - 1; i++) {
//             if (result[i] > result[i+1]) {
//                 let temp = result[i];
//                 result[i] = result[i+1];
//                 result[i+1] = temp;
//             } 
//         }
//     }
//     return result;
// }

//==================================================================
//Seek the factorial by 2 ways

//let numb = 6;
// let result = 1;
// for (let i = 1; i < numb; i++) {
//     result *= i;
// }
// console.log(result)

// let i = 0;
// let result = 1;
// function factorial(number){
//     i++;
//     if (i > number+1) return;
//     result *= i;
//     factorial(number);
// }
// factorial(10);

//======================================================================
//Seek armstrong number

// function armstrongNum (number) {
//     let numasive = [...''+ number].map(Number);

//     numasive = numasive.map(i => i ** numasive.length);
//     let result = numasive.reduce((accum, value) => accum + value);
//     return result;
// }

// console.log(armstrongNum(281));

//======================================================================
// Compare last digits of numbers

// function lastSign (arr) {
//     let temp = [];
//     for(let i = 0; i < arr.length; i++) {
//         temp.push((arr[i].toString()).split(''));
//     }
//     for (let j = 0; j < temp.length - 1; j++) {
//         if (temp[j][temp[j].length - 1] == temp[j+1][temp[j].length - 1]) {
//             temp[j] = true;
//         } else temp[j] = false;
//         // Якщо передостаннє true то і останнє true
//         if (temp[j] == temp[temp.length -2] && temp[j] == true) {
//             temp[j+1] = true;
//         }
//     }
//     if (temp.filter(Boolean).length == temp.length) {
//         return true;
//     } else return false;
// }

// console.log(lastSign([11,21,31]))
// console.log(lastSign([12,21,31]))

//======================================================================
// Checking the palindrome property

// function palindrom(word) {
//     word = word.split('');
//     if (word.join('') == (word.reverse()).join('')) {
//         return true;
//     } else return false;
// }
// console.log(palindrom('dsssd'));
// console.log(palindrom('dassd'));

//======================================================================
// obtaining letter indices in a phrase
// (also we can get the total number of was in a phrase using `indexess.length()`)

// function seekLetterIndex (word, letter) {
//     word = word.split('');
//     indexess = [];
//     for (let index in word) {
//         if (word[index] == letter) indexess.push(index);
//     }
//     return indexess;
// }

// console.log(seekLetterIndex('Hello there', 'l'))

//======================================================================
//check first and last letter of string

// function checkFLetters (word, firstLetter, lastLetter) {
//     if (word.startsWith(firstLetter) && word.endsWith(lastLetter)) return true
// }

// console.log(checkFLetters('words', 'w', 'd'))

//======================================================================
// Substrings

// function seekSub(str, subStr) {
//     if (str.includes(subStr)) return true;
// }

// console.log (seekSub('Indian food', 'food'));

//======================================================================
//find factor

// function findFactor (number) {
//     let arr = [];
//     for (let i = 0; i <= number; i++) {
//         if (number % i == 0) arr.push(i);
//     }
//     return arr;
// }

// console.log(findFactor(12))
// console.log(findFactor(13))

//======================================================================
// log Fibonacci sequence

// function fibonacci(steps) {
//     let fibonacciArray = [0, 1];
//     for (let i = 0; i <= steps; i++) {
//         fibonacciArray.push(fibonacciArray[0] + fibonacciArray[1]);
//         fibonacciArray.shift()
//     }
//     return fibonacciArray[1];
// }
// console.log(fibonacci(90))