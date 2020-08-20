// let app = {
//     data: 42
// };
// console.log(app);

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.getAge = function () {
//         return userAge;
//     };
//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Wrong value');
//         }
//     };
//     this.say = function () {
//         console.log(`Username is ${this.name}, age is ${this.age}`);
//     };
// }

// let user = new User('John', 25);
// console.log(user.name);
// console.log(user.age);
// user.say();
// console.log(user.getAge());
// user.setAge(30);
// console.log(user.getAge());

// Anonymus self-callable function wtf
// let number = 1;

// (function() {
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3);
// }());

// console.log(number);

let user = (function () {
    let private = function () {
        console.log('Private');
    };
    let sayHello = function () {
        console.log('Hello');
    };
    return {
        sayHello: sayHello
    };
}());

console.log(user);
console.log(user.sayHello());