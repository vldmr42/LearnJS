"use strict";

const log = function (a, b, ...rest){
    console.log(a, b, rest);
};

log('a', 'b', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis){
    console.log(number * basis);
}