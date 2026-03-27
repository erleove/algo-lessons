// В массиве все числа встречаются парами, кроме ДВУХ чисел.
// Нужно найти оба уникальных числа и вернуть их в виде массива.

function findTwoUnique(arr) {
    // Выбрать структуру данных
    // пройти по этой структуре и получить итоговый массив

    // freq map

    // temp я записал current в temp и удалил из массива
    // я ищу значение из temp в остатке массива и если не нахожу пушу в result

    const freqMap = new Map();


    arr.forEach((num) => freqMap.has(num) ? freqMap.set(num, freqMap.get(num) + 1) : freqMap.set(num, 1))

    // console.log(Array.from(freqMap.keys()))

    return Array.from(freqMap.keys()).filter(key => freqMap.get(key) === 1) 


    // O(n^2)    
}

// Примеры:
console.log(findTwoUnique([2, 1, 2, 5, 1, 7]));
// Уникальные числа: 5 и 7
// [5, 7]

console.log(findTwoUnique([4, 2, 4, 3, 1, 2, 3, 8]));
// Уникальные числа: 1 и 8
// [1, 8]

console.log(findTwoUnique([1, 1, 2, 3, 3, 4, 4, 5]));
// Уникальные числа: 2 и 5
// [2, 5]

console.log(findTwoUnique([10, 20, 10, 30, 40, 30]));
// Уникальные числа: 20 и 40
// [20, 40]