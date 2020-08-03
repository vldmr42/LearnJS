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

for (let i = 0; i < 2; i++) {
    let exp = prompt('Enter your expenses item ' + i, ''),
        exp_value = +prompt('How much does it cost', '');

    if ((typeof (exp)) === 'string' && (typeof (exp) != null) && typeof (exp_value) != null &&
        exp != '' && exp_value != '' && exp.length < 50) {
        console.log('done')
        appData.expenses[exp] = exp_value;
    } else {
        console.log('...')
    }
};

appData.moneyPerDay = appData.budget / 30;

alert('Your daily budget is ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Bum')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Average money');
} else if (appData.moneyPerDay > 2000) {
    console.log('Rich mf');
} else {
    console.log('WTF');
}