'use strict';
// alert('Hello World!');

// let answer = confirm('Are you here?');
// console.log(answer);

// let answer = prompt('Есть ли вам 18?', 'Да');
// console.log(answer);

let money = +prompt('Enter your monthly budget.', '');
let time = prompt('Enter date in YYYY-MM-DD format', '')

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

console.log(appData);

let exp1 = prompt('Enter your expenses item 1', '');
let exp1_value = +prompt('How much does it cost', '');
let exp2 = prompt('Enter your expenses item 2', '');
let exp2_value = +prompt('How much does it cost', '');

appData.expenses[exp1] = exp1_value;
appData.expenses[exp2] = exp2_value;

let dailyBudget = (money - (exp1_value + exp2_value)) / 30;

alert('Your daily budget is ' + dailyBudget)