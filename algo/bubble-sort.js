const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('Исходный массив:', numbers);
// console.log('Отсортированный массив:', bubbleSort(numbers));



// ПЛАН

// 2. цикл в цикл O(n^2) o(n)
// 3. внутр итератор пробегает по массиву, если при i = 0, a[0] > a[1] , меняем местами
// переприсвоением temp = a[0] , a[0] = a[1], a[1] = temp

//Swap fn
function swapFn (arr, index){
    let temp = arr[index]
    
    arr[index] = arr[index + 1]
    
    arr[index + 1] = temp
}


function bubbleSort (numbers) {
    //[34, 25, 12, 22, 11, 64]
    //[25, 12, 22, 11, 34]
    //[12, 22, 11, 25]
    //[12, 11, 22]
    //[11, 12]
    for (let i = 0; i < numbers.length; i++){
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] < numbers[j + 1]) swapFn(numbers, j)
    }}

    return numbers
}

console.log(bubbleSort(numbers))



