'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;

const scrollWidth = box.scrollWidth;
const scrollHeight = box.scrollHeight;

console.log(width, height);
console.log(offsetWidth, offsetHeight);
console.log(scrollWidth, scrollHeight);

btn.addEventListener('click', ()=>{
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style.display);

// How much scrolled on page
console.log(document.documentElement.scrollTop);