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
// class User {
//     constructor(name, id) {
//         this.id = id;
//         this.name = name;
//         this.human = true;
//     }
//     hello() {
//         console.log('Hello ' + this.name);
//     }
//     exit() {
//         console.log('User ' + this.name + ' has left');
//     }
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);
// console.log(ivan);
// console.log(alex);
// alex.hello();
// ivan.exit();

// 1) this - window/undefined

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
// }
// showThis(4, 5);

// 2) this - object

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);

//         function shout() {
//             // this - window
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user = {
//     name: 'John',
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));


// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(5));

// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'red';

//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// });

let name = 'Ivan',
    age = 30,
    mail = 'example@mail.com';

document.write(`User ${name} ${age} years old`);

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();
arr[1]();
arr[5]();
arr[9]();

let fun = () => {
    console.log(this);
};

// fun();

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;
    console.log(number * basis);
}
calcOrDouble(3, 5);