// Функции bind(), apply() и call() работают с контекстом и аргументами. В этом упражнении вы научитесь заменять одну функцию другой для получения функциональности, аналогичной bind().
//
//     bind.js
// Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя аналогично встроенной bind(obj, fn). Аргументы функции:
//
//     obj – объект выступающий в роли контекста
// fn() – функция привязываемая к контексту
// const obj = { number: 5 };
// const fn = function fn(number) {
//     return number + this.number;
// };
// const fnWithContext = bind(obj, fn);
//
// // Принимает столько же аргументов сколько и исходная функция
// fnWithContext(3); // 8
// Примечания
// Ограничение: для реализации нельзя пользоваться только встроенной функцией bind().

// @ts-check

// BEGIN (write your solution here)
const bind = (obj, fn) => (...args) => fn.apply(obj, args);

export default bind;
// END


//
// const bind = function (context, fn) {
//     return function (...args) { // упаковка входных данных в массив
//         return fn.apply(context, args);
//     };
// };
