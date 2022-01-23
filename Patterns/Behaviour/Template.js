class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    responsibilities(){}

    work(){
        return `${this.name} executing ${this.responsibilities()}`;
    }

    getPAid(){
        return `${this.name} have payment: ${this.salary}`;
    }
}

class Developer extends Employee{
    constructor(name, salary){
        super(name, salary);
    }

    responsibilities(){
        return 'Develops software';
    }
}

class Tester extends Employee{
    constructor(name, salary){
        super(name, salary);
    }

    responsibilities(){
        return 'Tests software';
    }
}

const dev = new Developer('Vlad', 100);
console.log(dev.getPAid());
console.log(dev.responsibilities());

const tester = new Tester('Vika', 80);
console.log(tester.getPAid());
console.log(tester.responsibilities());