"use strict";

let numberOfFilms = +prompt('How many movies are you watched?', '0');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let movieName = '';
let movieScore = '';

// FOR
for (let i = 0; i < numberOfFilms; i++){
    movieName = prompt('One of last watched movies?', '');
    movieScore = prompt(`How you score ${movieName} movie`, '');

    if (movieName != null && movieScore != null && movieName != '' & movieScore != '' && movieName.length < 50){
        personalMovieDB.movies[movieName] = movieScore;
    } else {
        console.log('Error');
        i--;
    }
    
}

// WHILE
// while(numberOfFilms > 0){
//     movieName = prompt('One of last watched movies?', '');
//     movieScore = prompt(`How you score ${movieName} movie`, '');

//     if (movieName != null && movieScore != null && movieName != '' & movieScore != '' && movieName.length < 50){
//         personalMovieDB.movies[movieName] = movieScore;
//     } else {
//         console.log('Error');
//         continue;
//     }
//     numberOfFilms--;
// }

// DO
// do{
//     movieName = prompt('One of last watched movies?', '');
//     movieScore = prompt(`How you score ${movieName} movie`, '');

//     if (movieName != null && movieScore != null && movieName != '' & movieScore != '' && movieName.length < 50){
//         personalMovieDB.movies[movieName] = movieScore;
//     } else {
//         console.log('Error');
//         continue;
//     }
//     numberOfFilms--;
// }
// while(numberOfFilms > 0);

if (personalMovieDB.count < 10){
    console.log(' Only few films were watched');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are classical viewer');
} else if (personalMovieDB.count >= 30){
    console.log('You are movies fan');
} else{
    console.log('error');
}



console.log(personalMovieDB);