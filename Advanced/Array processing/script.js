"use strict";

// FILTER
// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });
// console.log(shortNames);

// MAP
// const answers = ['IvAn', 'AnnA', 'Hello'];
// const result = answers.map(item=>item.toLowerCase());
// console.log(result);

// EVERY/SOME
// const some = [4, 'qwq', 'dasdaff'];
// console.log(some.some(item=>typeof(item) === 'number'));
// console.log(some.every(item=>typeof(item)==='number'));

// REDUCE
// const arr = [4, 5, 1, 3, 2, 6];
// const result = arr.reduce((sum, current)=>sum+current);
// console.log(result);
// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current)=>`${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};
const newArr = Object.entries(obj)
    .filter(item=>item[1]==='person')
    .map(item=>item[0]);
console.log(newArr);