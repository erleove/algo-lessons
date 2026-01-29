// max1

function max1 (arr) {
    return Math.max(...arr)
}
// max1

function max2 (arr) {
    //Переменная для сохранения текущего максиммума на итерации
    let result = arr[0]
    // let result = -Infinity

    arr.forEach((el) => {
        if (el > result) result = el
    })

    return result 
}

console.log(max2([1,2,3,4,5]))
console.log(max2([-1,-2,-3]))

