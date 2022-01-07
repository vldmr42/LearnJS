"use strict";

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('First message');

function calcSum(a, b) {
    return (a + b);
}

console.log(calcSum(4, 4));
console.log(calcSum(2, 8));
console.log(calcSum(99, 10));

function ret() {
    let num = 50;
    return num;
}

const logger = function () {
    console.log('Hello');
};

logger();

// arrow func short synthax
// const calc = (a,b) => a + b;

// arrow func norm synthax
const calc = (a, b) => {
    console.log('');
    return a + b;
};