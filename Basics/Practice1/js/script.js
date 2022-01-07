"use strict";

const numberOfFilms = +prompt('How many movies are you watched?', '0');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[prompt('One of last watched movies?', '')] = prompt('How you score this movie', '');
personalMovieDB.movies[prompt('One of last watched movies?', '')] = prompt('How you score this movie', '');

console.log(personalMovieDB);