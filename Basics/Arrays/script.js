"use strict";

const arr = [1,2,13,24,25,6,18];
arr.sort(compareNum);
console.log(arr);


function compareNum(a, b) {
    return a - b;
}
// remove last elem
// arr.pop();

// append elem
// arr.push(10);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// arr.forEach(function(value, i,arr){
//     console.log(`${i}: ${value} in array ${arr}`);
// });

// const str = 'prod1, prod2, prod3, prod4';
// const products = str.split(', ');
// // console.log(products);
// console.log(products.join('; '));