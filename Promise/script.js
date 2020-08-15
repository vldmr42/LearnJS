let drink = 1;

function shoot(arrow) {
    console.log('You have made a shot...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('You missed');
        }, 3000);
    });
    
    return promise;
}

function win() {
    console.log('You win');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('You got beer');
}

function giveMoney() {
    console.log('You got money');
}

function loose() {
    console.log('You lose');
}

shoot({})
    .then(mark => console.log('You hit the target'))
    .then(win)
    .catch(loose)