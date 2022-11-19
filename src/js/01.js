console.log('hello world')

// 定义变量
a = 1;
var b = 2;
const c = 3;
let d = 4;

// 1. number
const aa = 1;
// 2. string
const bb1 = '1234567898765';
const bb2 = "sdfgt4edcvg";
const bb3 = `${bb1} ${bb2}`
const bb4 = bb2 + bb1;
// 3. boolean
const cc = true;
const cc1 = false;
// 5. undefined
let dd = undefined;
// 6. null
const ee = {};
const ee1 = null;
// 7. symbol
const ff = Symbol('aaaa');

// 4. object
const gg = {
    key: 'pjw',
    name: 'aaa'
}

// 禁止
// gg = {

// }
gg.name = 'aaa'
Object.freeze(gg)

const gg1 = {
    "key": "pjw",
    "name": "aaa"
}

// 加属性
const props = 'height';
gg1.age = 12
gg1['age'] = 14
// 变量的方式
gg1[props] = 181;

console.log(gg1)

const gg2 = {
    [props]: 121,
}

console.log(gg2)