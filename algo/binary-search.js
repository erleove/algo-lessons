// что я получаю на вход?

function binarySearch (arr, target) {

    // любая структура данных
    // валидация входных параметров
   // ввод [1,2,3]
   // выход результат поиска индекс или -1 

   // arrPart.length > 1
   // 1. поделить на отрезки больше 1
   // 2. сравнить искомое с индексом

   if (!Array.isArray(arr)) throw Error('not an array');

   let left = 0;
   let right = arr.length - 1;
   let mid = -1;
   
   while (left <= right) {
        mid = Math.floor((right + left)/2)

        if (target == arr[mid]) return mid;

        if (target > arr[mid]) left = mid + 1;

        if (target < arr[mid]) right = mid - 1;
    }

    return -1
}

// console.log(binarySearch([5,10,15,20,25,30,35], 20))

// 0 --- 7
// 0 --- 2
// 0 --- 0

// 0 --- 7
// 3 --- 7
// 5 --- 7
// 6 --- 7

function recursiveBinarySearch (arr, target, left = 0, right = arr.length - 1) {
   const mid = Math.floor((right + left)/2);

   // обозначить условие выхода из рекурсии
   if (target === arr[mid]) return mid;

   if (target > arr[mid]) return recursiveBinarySearch(arr, target, mid + 1, right);

   if (target < arr[mid]) return recursiveBinarySearch(arr, target, left, mid - 1);

}

console.log(recursiveBinarySearch([5,10,15,20,25,30,35], 10))