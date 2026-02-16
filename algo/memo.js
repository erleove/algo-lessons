// декоратор это функция которая оборачивает другую функцию

// f(3) => 

    function sum (a, b) {
        console.log('trigger');
        return a + b;
    }

    function memoizator (fn) {
        const memoMap = new Map()
        return (...args) => {    
            const key = JSON.stringify(args)
            if (memoMap.has(key)) return memoMap.get(key)
            
            const result = fn(args)

            memoMap.set(key, result)
            return result
        }
    }

    const sumMemoizator1 = memoizator(sum)
    sumMemoizator1(1,3)
    sumMemoizator1(1,3)
    sumMemoizator1(1,3)

    const sumMemoizator2 = memoizator(sum)
    sumMemoizator2(1,3)
    sumMemoizator2(1,3)
    sumMemoizator2(1,3)


    const userId = {id: 1, toString: () => 'foo'}
    console.log(userId.toString())