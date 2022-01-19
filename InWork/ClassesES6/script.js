"use strict";

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

class ColoredREctangleWithTExt extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, Color: ${this.bgColor}`);
    }
}

// const square = new Rectangle(10, 10);
// const long = new Rectangle(100, 24);
// console.log(long.calcArea());

const div = new ColoredREctangleWithTExt(10, 25, 'TEXT', 'blue');
div.showMyProps();
