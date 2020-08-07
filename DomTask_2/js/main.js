let startBtn = document.getElementById('start');
// console.log(startBtn);

let rightBlocks = document.querySelectorAll("div[class*='-value']"),
    budgetValue = rightBlocks[0],
    dayBudgetValue = rightBlocks[1],
    levelValue = rightBlocks[2],
    expensesValue = rightBlocks[3],
    optionalExpensesValue = rightBlocks[4],
    incomeValue = rightBlocks[5],
    monthSavingsValue = rightBlocks[6],
    yearSavingsValue = rightBlocks[7]
// console.log(rightBlocks);

let mustExpInput = document.getElementsByClassName('expenses-item');
// console.log(mustExpInput);

let allBtns = document.getElementsByTagName('button'),
    expConfirmBtn = allBtns[0],
    optExpConfirmBtn = allBtns[1],
    calcBtn = allBtns[2];
// console.log(expConfirmBtn);

let optExpInput = document.querySelectorAll('.optionalexpenses-item');
// console.log(optExpInput);

// incomeInput, savingsCheckbox, summInput, procInput, yearIn, monthIn, dayIn

let incomeInput = document.querySelector('.choose-income'),
    savingsCheckbox = document.querySelector('#savings'),
    savingsIn = document.querySelector('.choose-sum'),
    savingsProcIn = document.querySelector('.choose-percent'),
    yearIn = document.querySelector('.year-value'),
    monthIn = document.querySelector('.month-value'),
    dayIn = document.querySelector('.day-value');
// console.log(yearIn);

let money, time;

startBtn.addEventListener('click', function (event) {
    time = prompt('Enter date in YYYY-MM-DD format', '');
    money = +prompt('Enter your monthly budget.', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Enter your monthly budget.', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearIn.value = new Date(Date.parse(time)).getFullYear();
    monthIn.value = new Date(Date.parse(time)).getMonth() + 1;
    dayIn.value = new Date(Date.parse(time)).getDate();
});

expConfirmBtn.addEventListener('click', function (event) {
    let sum = 0;

    for (let i = 0; i < mustExpInput.length; i++) {
        let exp = mustExpInput[i].value,
            exp_value = mustExpInput[++i].value;

        if ((typeof (exp)) === 'string' && (typeof (exp) != null) && typeof (exp_value) != null &&
            exp != '' && exp_value != '' && exp.length < 50) {
            console.log('Expenses Calculated');
            appData.expenses[exp] = exp_value;
            sum += +exp_value;
        } else {
            i = i - 1;
            console.log('...');
        }
    }
    expensesValue.textContent = sum;
});

optExpConfirmBtn.addEventListener('click', function (event) {
    for (let i = 0; i < optExpInput.length; i++) {
        let opt = optExpInput[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

calcBtn.addEventListener('click', function (event) {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Bum';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Average money';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Rich mf';
        } else {
            levelValue.textContent = 'WTF';
        }
    } else {
        dayBudgetValue.textContent = 'Error occured';
    }

});

incomeInput.addEventListener('input', function (event) {
    let items = incomeInput.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', function (event) {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

savingsIn.addEventListener('input', function (event) {
    if (appData.savings == true) {
        let sum = +savingsIn.value,
            percent = +savingsProcIn.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

savingsProcIn.addEventListener('input', function (event) {
    if (appData.savings == true) {

        let sum = +savingsIn.value,
            percent = +savingsProcIn.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);

    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

console.log(appData);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('What is savings amount?'),
            percent = +prompt('What percent?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Monthly income from your deposit: ' + appData.monthIncome.toFixed(2));
    }
}

// checkSavings();