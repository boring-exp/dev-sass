// 微任务： promise
// 


console.log(1)
const promise = new Promise((resolve, reject) => {
    console.log(2)
    resolve(3)
})
setTimeout(() => {
    console.log(4)
})
console.log(5)
promise.then((res) => console.log('结果' + res))
console.log(6)
setInterval(() => {}, 100)