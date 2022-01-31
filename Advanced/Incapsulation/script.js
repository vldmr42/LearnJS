"use strict";

class User{
    constructor(name, age){
        this.name = name;
        this.userAge = age;
    }
    
    
    say(){
        console.log(`User name: ${this.name}, age: ${this.age}`);
    }
    
    getAge(){
        return this.userAge;
    }
    
    setAge(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            this.userAge = age;
        }else{
            console.log('Unacceptable value');
        }
    }
}

const ivan = new User('Ivan', 27);

