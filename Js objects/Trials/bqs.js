// Query String (строка запроса) - часть адреса страницы в интернете, содержащая константы и их значения. Она начинается после вопросительного знака и идет до конца адреса. Пример:
//
// # query string: page=5
// https://ru.hexlet.io/blog?page=5
//     Если параметров несколько, то они отделяются амперсандом &:
//
// # query string: page=5&per=10
// https://ru.hexlet.io/blog?per=10&page=5
//     buildQueryString.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:
//
//     import bqs from '../buildQueryString.js';
//
// bqs({ per: 10, page: 1 });
// // page=1&per=10
// bqs({ param: 'all', param1: true });
// // param=all&param1=true
// Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать).

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const bqs = (obj) => {
    const string = [];
    const sortedKeys = Object.keys(obj).sort();

    for (const key of sortedKeys) {
        string.push(`${key}=${obj[key]}`);
    }
    return string.join('&');
};

export default bqs;
// END
