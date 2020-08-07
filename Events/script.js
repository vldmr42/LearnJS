let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function () {
//     alert('You pressed the first button');
// }

btn[0].addEventListener('click', function (event) {
    let target = event.target;
    console.log('Event has occured ' + event.type +
        ' on element ' + event.target);
});

wrap.addEventListener('click', function (event) {
    console.log('Event has occured ' + event.type +
        ' on element ' + event.target);
});

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Event has occured ' + event.type +
        ' on element ' + event.target);
});

btn.forEach(function (item) {
    item.addEventListener('mouseleave', function (event) {
        console.log('Leaved');
    });
});