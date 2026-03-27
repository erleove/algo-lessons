// Нужно реализовать декоратор, который логирует вызов функции:
// - какие аргументы были переданы
// - какой результат возвращён

function logger(fn) {
    return (...args) => {

    // TODO: верни новую функцию, которая:
    // 1. Выводит в консоль: "Вызов функции с аргументами: ..."

    console.log(`Вызов функции с аргументами: ${args}`)

    // 2. Вызывает исходную функцию

    const result = fn(...args)

    // 3. Выводит в консоль: "Результат: ..."

    console.log(`Результат: ${result}`)


    // 4. Возвращает результат

    return result

    }
}

// Функции для тестирования:
function add(a, b) {
    return a + b;
}

function multiply(a, b, c) {
    return a * b * c;
}

function greet(name) {
    return `Привет, ${name}!`;
}

// Оборачиваем функции:
const loggedAdd = logger(add);
const loggedMultiply = logger(multiply);
const loggedGreet = logger(greet);

// Проверка:
console.log(loggedAdd(3, 5));
// Вызов функции с аргументами: [3, 5]
// Результат: 8
// 8

console.log(loggedMultiply(2, 3, 4));
// Вызов функции с аргументами: [2, 3, 4]
// Результат: 24
// 24

console.log(loggedGreet('Анна'));