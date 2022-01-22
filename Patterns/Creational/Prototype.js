"use strict";

const car = {
    wheels: 4,
    init(){
        console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`)
    }
};

const carWithOWner = Object.create(car, {
    owner:{
        value: 'Dmitriy'
    }
});

console.log(carWithOWner.__proto__ === car);
carWithOWner.init();