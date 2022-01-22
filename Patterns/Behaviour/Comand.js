class MyMath{
    constructor(initialVAlue=0){
        this.num = initialVAlue;
    }

    square(){
        return this.num ** 2;
    }

    cube(){
        return this.num ** 3;
    }
}

class Command{
    constructor(subject){
        this.subject = subject;
        this.commandsExecuted = [];
    }

    execute(command){
        this.commandsExecuted.push(command);
        return this.subject[command]();
    }
}

const x = new Command(new MyMath(2));

console.log(x.execute('square'));
console.log(x.execute('cube'));

console.log(x.commandsExecuted);