function timer() {
    let deadLine = '2020-08-17';

    function getTimeReamaining(endTime) {
        let t = Date.parse(deadLine) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // hours = Math.floor((t / 1000 / 60 / 60) % 24),
        // days = Math.floor((t / (1000 * 60 * 60 * 24)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeReamaining(endTime);
            hours.textContent = t.hours.toString().padStart(2, '0');
            minutes.textContent = t.minutes.toString().padStart(2, '0');
            seconds.textContent = t.seconds.toString().padStart(2, '0');

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);
}let more = document.querySelector('.more'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close');
console.log(overlay);

more.addEventListener('click', function () {
overlay.style.display = 'block';
this.classList.add('more-splash');
document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
overlay.style.display = 'none';
more.classList.remove('more-splash');
document.body.style.overflow = '';
});

module.exports = timer;