// 函数式
const array = [2, 1, 3, 4]

// // 函数
// function callback(a, b, c) {
//     console.log(a, b, c)
// }
// // 遍历
// array.forEach(callback)


// 1. 所有的元素+1
// 2. 打印新数组
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] + 1)
// }

array.map(item => item + 1)
    .forEach(item => console.log(item))

console.log(array.includes(100))
console.log(array.join('+'))
// console.log(array.reverse())
console.log(array.slice(1, 3))

// a - b顺序
// b - a 逆序
array.sort((a, b) => a - b)
console.log(array)

const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);
const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
const removed1 = myFish.splice(2, 0, "drum");



const name = 'drum'
const findItem = myFish.findIndex((item) => item === name)

console.log(findItem)


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((item) => item.length > 5)
console.log(result)


const testArr = [[6, 2], 3, 4, [4], 5]
// 打平，排序，过滤数值为4的元素，然后打印所有值
testArr.flat()
    .sort((a, b) => a - b)
    .filter((item) => item !== 4)
    .forEach((item) => console.log(item))

