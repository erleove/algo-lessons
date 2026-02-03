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

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
