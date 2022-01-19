"use strict";

function user(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this,name}`);
    };
}

user.prototype.exit = function(){
    console.log(`User ${this.name} has left`);
};

const ivan = new user('Ivan', 28);
const alex = new user('Alex', 20);

console.log(ivan, alex);
ivan.hello();
alex.hello();
ivan.exit();