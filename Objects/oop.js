let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor  )

//  Old functions
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello ' + this.name)
//     };
// }

// New classes
'use strict';
class User {
    constructor(name, id) {
        this.id = id;
        this.name = name;
        this.human = true;
    }
    hello() {
        console.log('Hello ${this.name}');
    }
    exit() {
        console.log('User ${this.name} has left');
    }
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);
alex.hello();
ivan.exit();