// Краевые кейсы/вопросы 
// 1. Проверить что строка на входе

// План
// 1. Итерироваться по строке циклом for 
// 2. Собрать новую строку из старой (идя с конца в начало)

function reverseString(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    
    if (str.legnth <= 1) {
        return str;
    }
    
    let result = '';
    
    for (let i = str.length - 1; i >= 0; i --) {
       result += str[i];
    }
    
    return result;
    
}



try {
    console.log(reverseString([1,2,3]));
} catch(e) {
    // console.error(e);
}



console.log(reverseString('hey')); //yeh
console.log(reverseString('test')); //tset
console.log(reverseString('')); // ''
console.log(reverseString('a')); // ''