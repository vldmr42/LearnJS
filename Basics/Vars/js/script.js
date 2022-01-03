"use strict";

// let - mutable
let number = 5;

// const - immutable
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};
obj.a = 50;

// objects are mutable even when created with const
console.log(obj);

{
    // let and const limited by scope, var - not limited
    let result = 50;
}

// using out of scope
// console.log(result);