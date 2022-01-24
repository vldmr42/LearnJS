"use strict";

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone));

// deep object clone
const clone = JSON.parse(JSON.stringify(persone));
console.log(clone);