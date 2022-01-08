"use strict";

// To string
// 1
console.log(typeof(String(null)));
console.log(typeof(String(4)));
// 2
console.log(typeof(null + ''));
console.log('httpls://vk.com/catalog/' + 5);
const fontSize = 26 + 'px';

// To number
// 1
console.log(typeof(Number('4')));
// 2
console.log(typeof(+'5'));
// 3
console.log(typeof(parseInt('15px', 10)));

// To boolean

// false
// 0; ''; null; undefined; NaN;

console.log(typeof(Boolean('4')));

console.log(typeof(!!'4444'));