// Написать рекурсивную функцию, которая считает сумму всех чисел от 1 до n.
// Например: sumTo(5) = 1 + 2 + 3 + 4 + 5 = 15

function sumTo(n) {
    if (n === 1) 
    return n

    return n + sumTo(n - 1)
}

// Примеры:
console.log(sumTo(5));  // 15
console.log(sumTo(3));  // 6
console.log(sumTo(1));  // 1
console.log(sumTo(10)); // 55
console.log(sumTo(1)); // 55

// 3 + sumTo(2) -> 2 + sumTo(1) -> 1