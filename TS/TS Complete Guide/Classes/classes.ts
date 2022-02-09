class Vehicle {
    constructor(public color: string){}

    public drive(): void {
        console.log('chugga chugga');
    }

    public honk():void {
        console.log('beep');        
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);
    }
    public drive(): void {
        console.log('vroom');    
    }

    startDrivingProcess(): void {
        this.drive();
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'orange');
car.drive();
car.honk();