"use strict";

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};

// Creating without protyping
// const john = {
//     health: 100,
// };

// creating with proryping
const john = Object.create(soldier);

// old way (depricated)
// john.__proto__ = soldier;

// assigning protype after creation
// Object.setPrototypeOf(john, soldier);

john.sayHello();