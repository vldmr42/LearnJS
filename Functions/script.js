let money, time;

function start() {
    money = +prompt('Enter your monthly budget.', '');
    time = prompt('Enter date in YYYY-MM-DD format', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Enter your monthly budget.', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
}

console.log(appData);

function chooseExpenses() {
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
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optExpName = prompt('Enter optional expense name'),
            optExpValue = +prompt('How much cost: ' + optExpName);

        if ((typeof (optExpName)) === 'string' && (typeof (optExpName) != null) && typeof (optExpValue) != null &&
            optExpName != '' && optExpValue != '' && optExpName.length < 50) {
            console.log('done')
            appData.optionalExpenses[optExpName] = optExpValue;
        } else {
            console.log('...')
        }
    }
}

chooseExpenses();
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);

    alert('Your daily budget is ' + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Bum')
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Average money');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Rich mf');
    } else {
        console.log('WTF');
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('What is savings amount?'),
            percent = +prompt('What percent?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Monthly income from your deposit: ' + appData.monthIncome.toFixed(2));
    }
}

checkSavings();