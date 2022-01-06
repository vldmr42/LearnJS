"use strict";

console.log('arr' + ' - object');
console.log(4 + '5');

let incr = 10,
    decr = 10;

// incr++;
// decr--;

// postfix incr/decr returns old value and performs operation afterwards
console.log(incr++);
console.log(decr--);

// prefix form performs operation and returns new value
console.log(++incr);
console.log(--decr);

console.log(5%2);

// value equality operator
console.log(2*4 == '8');

// strict equality operator
console.log(2*4 === '8');

const isChecked = true,
      isClose = fasle;

// and operator
console.log(isChecked && isClose);
// or operator
console.log(isChecked || isClose);