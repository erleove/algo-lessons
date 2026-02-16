// Все числа встречаются парами (кроме одного) надо найти уникальное число.


// Краевые кейсы/вопросы 
// 1. 

// План
// 1. Считать кол-во вхождений каждого числа в массив (делать инкремент числа (ключ число - значение кол-во вхождений))
// 2. Возвращаем то число, кол-во вхождений которого равно 1

function findUnique(arr) {
    const frequencyMap = {};
    
    let result = null;
    
    arr.forEach((num) => {
        if (frequencyMap[num]) {
            frequencyMap[num] +=1;
        } else {
            frequencyMap[num] = 1;
        }
    });

    
    for (let key in frequencyMap) {
        if (frequencyMap[key] === 1) {
            return key;
        }
    }

    
    return result;
}

console.log(findUnique([2,1,2,5,1])); //5
console.log(findUnique([7,3,5,3,7])); //5