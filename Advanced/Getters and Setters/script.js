"use strict";

const person = {
    name: 'Alex',
    age: 25,

    get userAge(){
        return this.age;
    },

    set userAge(num){
        this.age = num;
    },
};

console.log(person.age);
person.age = 33;
console.log(person.age);