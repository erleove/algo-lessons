const p = new Promise((resolve, reject) => {
    resolve(5)
})


const pRejected = new Promise((_, reject) => {
    setTimeout(() => {
        reject('reject') 
    }, 300)
})
.catch(e => console.log(e))
.finally()


const pResolved = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5)
    }, 300)
})

// Реализовать Promise.all
// Promise.all([p1, p2]) 
// Принимать массив промисов. Когда все перешли в fulfilled возвращать массив результатов. Когда один reject, возвращать ошибку.

Promise.all([pResolved]).then((res) => console.log(res)).catch((e) => console.log(e))

// Этот код нужно переписать на async await

// Домашка реализовать методы промисов.


