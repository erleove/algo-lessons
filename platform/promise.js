// const p = new Promise(() => {} /** resolve */, () => {} /** reject */);
// undefined
// typeof p

// this.status
// статусы промиса fulfilled, rejected, pending

// .then альтернативный способ хендлинга 

// Что такое промис? Это спецаильный объект. Который позволяет продолжить исполнение скрипта не получив return запущенной ф-и
// Отложенный код.

// Рассказать про event loop

// Promise.resolve() Promise абстрактный класс

const p = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error('шел бы ты')) // в reject передается reason '' или new Error. Что еще можно передать в rej по доке?
        // можно передать объект с нужными свойствами
    }, 300)
})

p.catch(() => console.log(p))


// const p = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(5)
//     }, 300)
// })

// p.then(() => console.log(p))

// console.log(p)

