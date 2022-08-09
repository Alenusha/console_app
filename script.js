"use strict";

// // создаем переменную и помещаем в нее ответ от пользователя
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms, //сюда помещ ответ от пользователя
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) { //<2 т.к. вопросы у нас повторяются по 2 раза
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('Какую оценку дадите этому фильму?', '');

//     // если ответы - это не отмена/ не пустая строка / и длина < 50 символов
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) { // при нажатии Отмена значение = null
//         personalMovieDB.movies[a] = b;  // то подставляем в базу данных
//         console.log('Done'); // для проверки, что всё правильно выполнилось
//     } else {
//         console.log('Error');
//         i--; // если услов не выполнилось, то откатываем цикл на 1 шаг назад и все по новой
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Настоящий киноман');
// } else {
//     console.log('Произошла ошибка');
// }
// //выводим и проверяем что все работает
// console.log(personalMovieDB);


// создаем переменную и помещаем в нее ответ от пользователя
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms, //сюда помещ ответ от пользователя
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) { //<2 т.к. вопросы у нас повторяются по 2 раза
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('Какую оценку дадите этому фильму?', '');
    
        // если ответы - это не отмена/ не пустая строка / и длина < 50 символов
        if (a != null && b != null && a != '' && b != '' && a.length < 50) { // при нажатии Отмена значение = null, Ок = '' 
            personalMovieDB.movies[a] = b;  // то подставляем в базу данных
            console.log('Done'); // для проверки, что всё правильно выполнилось
        } else {
            console.log('Error');
            i--; // если услов не выполнилось, то откатываем цикл на 1 шаг назад и все по новой
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Настоящий киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();