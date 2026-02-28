// Дана функция pipe, которая должна объединять несколько функций в цепочку
const pipe = (...fns) => {
  // За один вызов приходит массив операций.
  // Возвращаем функцию которая принимает в себя initial value и возвращает число/строку после цепочки операций .
  return async (initialValue) =>
    // через reduce можно обработать асинхронную логику
    await fns.reduce(async (result, fn) => fn(await result), initialValue);
  //     {
  //     let result = initialValue;

  //     fns.forEach((fn) => {
  //         result = fn(result)
  //     })

  //     return result;``
  // }
};

// Примеры функций для работы в конвейере
const add = (x) => (y) => x + y;
const multiply = (x) => (y) => x * y;
const subtract = (x) => (y) => y - x;
const double = (x) => x * 2;
const square = (x) => x ** 2;
const toString = (x) => `Результат: ${x}`;

// Асинхронные математические функции
const asyncAdd = (x) => (y) => {
    console.log(`Складываю ${y} + ${x}`);
    return new Promise(resolve => setTimeout(() => resolve(x + y), 500));
};

const asyncMultiply = (x) => (y) => {
    console.log(`Умножаю ${y} * ${x}`);
    return new Promise(resolve => setTimeout(resolve(y * x), 400));
};

const asyncSubtract = (x) =>  (y) => {
    console.log(`Вычитаю ${y} - ${x}`);
    return new Promise(resolve => setTimeout(resolve(y - x), 300));
};

const asyncDivide = (x) => (y) => {
    console.log(`Делю ${y} / ${x}`);
    return new Promise(resolve => setTimeout(resolve(y / x), 600));
};

const asyncPower = (x) => (y) => {
    console.log(`Возвожу ${y} в степень ${x}`);
    return new Promise(resolve => setTimeout(resolve(Math.pow(y, x)), 700));
};

// Задача 5.1: Реализуйте функцию pipe
// Задача 5.2: Что выведет следующий код?

// Случай 1
// const result1 = pipe(
//     add(5),      // +5
//     multiply(2), // *2
//     subtract(3)  // -3
// )(10); //27

// console.log('Результат 1:', result1);

// Случай 2
// const result2 = pipe(
//     double,      // *2
//     square,      // возвести в квадрат
//     toString     // преобразовать в строку
// )(5);

// console.log('Результат 2:', result2);

// Случай 3 (более сложный)
// const processNumber = pipe(
//     add(10),     // +10
//     (x) => x / 2, // /2 (обычная функция)
//     multiply(3)  // *3
// );

// const result3 = processNumber(4);
// const result4 = processNumber(8);

// console.log('Результат 3:', result3);
// console.log('Результат 4:', result4);

// Случай 1
const result1 = await pipe(
    asyncAdd(5),      // +5
    asyncMultiply(2), // *2
    asyncSubtract(3)  // -3
)(10); //27

console.log('Результат 1:', result1);

// Случай 2
// const result2 = pipe(
//     double,      // *2
//     square,      // возвести в квадрат
//     toString     // преобразовать в строку
// )(5);

// console.log('Результат 2:', result2);

// Случай 3 (более сложный)
// const processNumber = pipe(
//     add(10),     // +10
//     (x) => x / 2, // /2 (обычная функция)
//     multiply(3)  // *3
// );

// const result3 = processNumber(4);
// const result4 = processNumber(8);

// console.log('Результат 3:', result3);
// console.log('Результат 4:', result4);
