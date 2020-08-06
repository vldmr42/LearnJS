let menuItems = document.getElementsByClassName('menu-item');
let menu = document.querySelectorAll('.menu');
let title = document.getElementById('title');
let adv = document.getElementsByClassName('adv');
let column = document.getElementsByClassName('column');

// console.log(menuItems);
// console.log(menu);

menu[0].insertBefore(menuItems[2], menuItems[1]);

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

title.innerText = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv[0]);

let opinion = prompt('What is your opinion about Apple merch?');
let promptDiv = document.getElementsByClassName('prompt')
promptDiv[0].innerText = opinion;