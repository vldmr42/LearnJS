let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());
console.log(document.documentElement.clientWidth);

btn.addEventListener('click', function () {
    // box.style.height = box.scrollHeight + 'px';
    box.scrollTop = 0;
});