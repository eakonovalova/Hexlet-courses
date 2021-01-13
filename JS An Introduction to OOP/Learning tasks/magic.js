// Это задание хоть и небольшое, но хитрое, его иногда задают на собеседованиях. Если не получится его решить сразу – не сдавайтесь. Оно стоит того, чтобы разобраться самостоятельно.
//
//     magic.js
// Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:
//
//     Принимает на вход любое количество аргументов и возвращает функцию, которая, в свою очередь, принимает на вход любое количество аргументов и так до бесконечности (привет, рекурсия ;)).
// Аргументами могут быть только числа.
//     Результат вызова этой функции при проверке на равенство должен быть равен сумме всех аргументов всех подфункций.
//     import magic from './magic.js';
//
// magic() == 0; // true
// magic(5, 2, -8) == -1; // true
// magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true
// magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13; // true
// Алгоритм
// Для решения задачи вам понадобится создать внутри ещё одну функцию.
//     Возврат функции из функции позволит сохранять результат предыдущих вычислений.
//     Функции - это объекты, используйте данную особенность. Она позволит отдавать результат вычислений только в нужный момент.
//     Внимательно изучите теорию, подумайте, каким "магическим" способом можно получить объект, работающий необходимым образом.

// @ts-check
// BEGIN (write your solution here)
const magic = (...nums) => {
    const sum = nums.reduce((acc, c) => acc + c, 0);
    const rest = (...args) => magic(sum, ...args);
    rest.valueOf = () => sum;
    return rest;
};
// END
export default magic;
