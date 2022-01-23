// Open close principle
// Open for extension and closed for modification

class Shape{
    // AREA METHOD SHOULD BE REALIZED IN EVERY SUB_CLASS
    area(){
        throw new Error('Area method should be implemented');
    }
}

class Square extends Shape{
    constructor(size){
        super();
        this.size = size;
    }

    area(){
        return this.size ** 2;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }

    area(){
        return (this.radius ** 2) * Math.PI;
    }
}

class Rect extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

class Triangle extends Shape{
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }

    area(){
        return (this.a * this.b)/2;
    }
}

class AreaCalculator{
    constructor(shapes = []){
        this.shapes = shapes;
    }

    // VIOLATION OF OPEN-CLOSED PRINCIPLE ADDING NEW SHAPES CAUSES MODIFING
    sum(){
        return this.shapes.reduce((accum, shape)=>{
            accum += shape.area();
            return accum;
        }, 0);
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(5),
    new Circle(25),
    new Rect(10, 15),
    new Triangle(13, 42)
]);

console.log(calc.sum());