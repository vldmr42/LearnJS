const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// WHY TYPED ARRAYS?
// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const car = carMakers[0];
const myCar = carMakers.pop();
// PREVENT INCOMPATIBLE VALUES
carMakers.push(100);
// HELP WITH 'map'
carMakers.map((car: string): string =>{
    return car.toUpperCase();
})
// FLEXIBLE TYPES
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('10.01.2020');
importantDates.push(new Date());
importantDates.push(100);

// WHEN TO USE TYPED ARRAYS