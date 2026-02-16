// isPalindrome rotor -> true
// abc -> false

const isPalindrome = (value) => {
    // Привести к строке
    // Развернуть строку
    // Сравнить с оригиналом 
    const preparedValue = String(value).toLowerCase()

    return preparedValue.split('').reverse().join('') === preparedValue
    
}

console.log(isPalindrome("rotor"))
console.log(isPalindrome(121))
console.log(isPalindrome("rotoR"))