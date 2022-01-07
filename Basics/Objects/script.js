"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

// console.log(options.name);

// for (let key in options){
//     if (typeof(options[key])=== 'object'){
//         for (let i in options[key]){
//             console.log(`${key}:${i}:${options[key][i]}`);
//         }
//     } else {
//         console.log(`${key}: ${options[key]}`);
//     }
// }

// console.log(Object.keys(options).length);
// options.makeTest();

// object destruct
const {border, bg} = options.colors;
console.log(border, bg);