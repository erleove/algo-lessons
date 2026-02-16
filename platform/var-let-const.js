// console.log(a); // Я var не выведется тк значение не присвоено. window.a = undefined 
// console.log(b); // exception throw error тк b не обладает hoisting
// console.log(c); // exception throw error 

var a = 'Я var';
let b = 'Я let';
const c = 'Я const';

// console.log(d()); // fn declaration всплывает и может быть вызвана до объявления. Hoist целиком. // функция объявлена

function d() {
    return 'Функция объявлена';
}

console.log(e); // window.e = undefined
console.log(e); // throw exception

var e = function() {
    return 'Функциональное выражение';
}

// console.log(e); // fn e
// console.log(e()); // Функциональное выражение


// Вопрос: Что будет выведено (какие тут есть ошибки, если они есть)?

// Прочесть код построчно