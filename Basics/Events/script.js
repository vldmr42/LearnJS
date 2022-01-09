"use strict";

const btn = document.querySelector('button');

// btn.onclick = function(){
//     alert('Click');
// };

btn.addEventListener('click', ()=> {
    alert('CLick');
});

btn.addEventListener('mouseenter', (event)=> {
    console.log(event);
    console.log('Hover');
});

const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault;
    console.log(event.target);
});