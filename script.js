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
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms, //сюда помещ ответ от пользователя
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Настоящий киноман');
} else {
    console.log('Произошла ошибка');
}
//выводим и проверяем что все работает
console.log(personalMovieDB);





function getMathResult(base, amount) {  //базовое число и сколько раз его нужно будет повторить
    if (typeof(amount) !== 'number' || amount <= 0) { //если amount строго не равен числу или меньше или равно 0 
        return base; //то просто вернётся базовое число
    } 
        let result = ''; //новая переменная в которую будет записываться результат, она пока что = пустой строке

        // далее цикл начинается с 1(иначе 10*0=0 тоже отобразится в строке, а нам это не нужно) и заканчивается когда сравняется с amount(с 5 - это 2й аргумент в функции), т.е. число сначала будет умножаться на 1, потом на 2 и т.д. при умножении на 5 получается заключит число и цикл останавливается
        for (let i = 1; i <= amount; i++) {
            if (i === amount) { //т.е. когда итератор доходит до последнего числа ( 10*5 = 50 - выводится в строке)
                result = result + base * i; //черточки нам не нужны, поэтому их после последнего числа убираем
                // result += `${base * i}`; // или так записать
            } else { // в ином же случае
                result = result + base * i + '---'; // каждый раз после полученного числа будут черточки
                // result += `${base * i}---`;
            }
        }
    return result;
} 

console.log(getMathResult(10, 15));


