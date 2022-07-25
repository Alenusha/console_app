"use strict";

// создаем переменную и помещаем в нее ответ от пользователя
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms, //сюда помещ ответ от пользователя
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//задаём пользователю по 2 раза вопросы
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Какую оценку дадите этому фильму?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Какую оценку дадите этому фильму?', ''); 


// помещаем полученные ответы на эти вопросы в одно из свойств в формате ответ/оценка
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

//выводим и проверяем что все работает
console.log(personalMovieDB);