window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tabs = require('./parts/tabs.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        calc = require('./parts/calc.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});