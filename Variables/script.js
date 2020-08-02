"use strict";

// DataTypes
var number = 5;
// 4/0 = Infinity; 'asd' * 9 = NaN
var string = 'Hello';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

let person = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(person.name);
console.log(person['name']);

let arr = ['1', '2', '3', '4'];

// ToString

console.log(typeof(String(4)));
console.log(typeof('' + false));
console.log('htttps://holymacarony/' + 'iconcatsome/' + 5)

// ToNumber

console.log(typeof(Number('5')));

console.log(typeof(+'5'));

console.log(typeof(parseInt('15px', 10)));

let ans = +prompt('Hello?', '');

// 0, '', null, undefined, Nan - this is false

let switcher = null;

if (switcher) {
    console.log('Working..')
}
