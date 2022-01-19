"use strict";

// 4 types of function call

// 1. REGULAR FUNCTION: this = window, BUT IF use strict THEN undefined 
function showThis(a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return this.a + this.b;
    }

    console.log(sum());
}

// 2. OBJECTS METHODS CONTEXT - OBJECT
const obj = {
    a: 20,
    b: 15,
    sum: function(){
        console.log(this);
        function shout(){
            console.log(this);
        }
        shout();
    }
};

// 3. this IN CONSTRUCTORS AND CLASSES IS NEW OBJECT INSTANCE
function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

let ivan = new User('Ivan', 23);

function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

// 4. HANDMADE BIND this: call, apply, bind

// NOT CREATES NEW FUNCTION
sayName.call(user, 'Smith');
sayName.apply(user, ['Johnson']);

function count(num){
    return this*num;
}
// CREATES NEW FUNC
const double = count.bind(2);
console.log(double(3));
console.log(double(13 ));

const btn = document.querySelector('button');

// WHEN CLASSICAL FUNCTION DECLARATION this IS TARGET ELEMENT
btn.addEventListener('click', function(){
    console.log(this);
});

// ON ARROW FUNCTIONS this IS UNDEFINED SO USE EVENT
btn.addEventListener('click', (e)=>{
    console.log(e.target.style.backgroundColor = 'red');
});

// ARROW FUNCTIONS DONT HAVE THEIR OWN CONTEXT AND TAKE IT FROM THE PARENT 
const obj2 = {
    num: 5,
    sayNumber: function(){
        const say =()=>{
            console.log(this);
        };
        say();
    }
};