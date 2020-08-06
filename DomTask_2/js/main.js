let startBtn = document.getElementById('start');
// console.log(startBtn);

let rightBlocks = document.querySelectorAll("div[class*='-value']");
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

let incomeInput = document.getElementById('income'),
    savingsCheckbox = document.getElementById('savings'),
    savingsIn = document.getElementById('sum'),
    savingsProcIn = document.getElementById('percent'),
    yearIn = document.getElementsByClassName('year-value'),
    monthIn = document.getElementsByClassName('month-value'),
    dayIn = document.getElementsByClassName('day-value');
// console.log(yearIn);