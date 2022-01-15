"use strict";

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));

// // add classes
// console.log(btns[0].classList.add('red'));
// // remove classes
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// console.log(btns[1].classList.add('red'));
// if (btns[1].contains('red')){
//     console.log('contains red');
// }

btns[0].addEventListener('click', ()=> {
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // }else{
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// depricated
// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')){
        console.log('Hello');
    }
});

// event are not delegated and console log isnt working on elements that was added afterwards
// btns.forEach( btn => {
//     btn.addEventListener('click', (event) =>{
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);