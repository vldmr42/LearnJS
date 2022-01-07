"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    let numberOfFilms = +prompt('How many movies are you watched?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many movies are you watched?', '');
    }
    return numberOfFilms;
}


function rememberMyFilms(){
    
    let movieName = '';
    let movieScore = '';
    
    for (let i = 0; i < 2; i++){
        movieName = prompt('One of last watched movies?', '');
        movieScore = prompt(`How you score ${movieName} movie`, '');
        
        if (movieName != null && movieScore != null && movieName != '' & movieScore != '' && movieName.length < 50){
            personalMovieDB.movies[movieName] = movieScore;
        } else {
            console.log('Error');
            i--;
        }
    }
}


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log(' Only few films were watched');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are classical viewer');
    } else if (personalMovieDB.count >= 30){
        console.log('You are movies fan');
    } else{
        console.log('error');
    }    
}


function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}


function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres.push(prompt(`Whats your favorite genre ${i}`));
    }
}


personalMovieDB.count = start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();