"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies are you watched?', '');
        
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('How many movies are you watched?', '');
        }
    },

    rememberMyFilms: function(){
    
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
    },

    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log(' Only few films were watched');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are classical viewer');
        } else if (personalMovieDB.count >= 30){
            console.log('You are movies fan');
        } else{
            console.log('error');
        }    
    },

    showMyDB: function (){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function(){
        personalMovieDB.privat = !personalMovieDB.privat;
    },

    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Whats your favorite genre ${i}`);
            if (genre == '' || genre == null){
                console.log('Incorrect data');
                i--;
            }else{
                personalMovieDB.genres.push(genre);
            }

            personalMovieDB.genres.forEach((item, i)=>{
                console.log(`Favorite genre number ${i+1} is ${item}`);
            });
            
        }
    }
};


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();