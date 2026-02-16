// являются ли 2 строки анаграммами (игнорируя реестр и пробелы)

// Краевые кейсы/вопросы
// 1. Невалидный инпут
// 2. Что такое анаграмма?

// План решения задач
// 1. Обработали валидность инпута
// 2. Нужна мапа + мы проверяем что у них одинаковое содержание
// 3. Сделал бы 1 строку из отсортированных символов и
function isAnagram(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string")
        throw new Error("every argument must be string");

    if (str1.length !== str2.length) return false;

    // return str1.split("").sort().join("") === str2.split("").sort().join("");

    const freqMap1 = new Map()
    const freqMap2 = new Map()

    for (let i = 0; i < str1.length; i++) {
        const value1 = freqMap1.get(str1[i])

        freqMap1.set(str1[i], value1 ? value1 + 1 : 1);

        const value2 = freqMap2.get(str2[i])

        freqMap2.set(str2[i], value2 ? value2 + 1 : 1);
    }


    for (const [key, val] of freqMap1) {
        if (!freqMap1.has(key) || freqMap2.get(key) !== val) {
            return false;
        }
    }

    return true;
}