"use strict";

if (4 == 4) {
    console.log('Ok!')
} else {
    console.log('Error');
}

const num = 50;

// standart if
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}

// turnary operator
(num === 50) ? console.log('Ok!') : console.log('Error');


// switch
switch (num) {
    case 49:
        console.log('Wrong');
        break;
    case 100:
        console.log('Wrong');
        break;
    case 50:
        console.log('Wright');
        break;
    default:
        console.log('Not this time');
        break;
}