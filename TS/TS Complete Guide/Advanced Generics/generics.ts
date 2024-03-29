class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}


const arr = new ArrayOfAnything<string>(["a", "b"]);

// EXAMPLE OF GENERICS WITH FUNCTIONS

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
  }
}

function printNumbers(arr: number[]){
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
  }
}

function printAnything<T>(arr: T[]){
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
  }
}

// GENERIC CONSTRAINTS

class Car {
  print(){
    console.log('I am a car');
    
  }
}

class House {
  print(){
    console.log('I am a house');
    
  }
}

interface Printable {
  print(): void
}

function prinHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++){
    arr[i].print();
  }
}