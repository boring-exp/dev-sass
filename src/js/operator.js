// + - * /
const strToInt = Number('thjdfijm')
const strToIntByParse = parseInt('1')
console.log(strToIntByParse)
console.log(1 + '1')
console.log(1 - '1')

// 原生类型
const a = 1;
// 包装类型
const aa = Number(1)

const b = (1 / 3).toFixed(2)
console.log(b)

// 逻辑运算
// 1.&&与
// 2. ||
const bb = undefined;
const aaa = bb || 5;
console.log('a', aaa)

// 比较运算符
// > < >= <= 
if (4 >= 3) {
    console.log('进来了')
} else {
    console.log('没进来')
}

// 只用===，包含了类型
// !=,==,!==,===
if (true !== 1) {
    console.log('aaa')
}

const people = {
    family: {
        brother: null,
        sister: {
            name: 'pjw'
        }
    }
}

// optional chainning
console.log(people?.family?.brother?.name)


// 流程控制
// if () {

// } else if () {

// } else {

// }

for(let i = 0; i < 5; i++) {
}

while(false) {

}

do {

} while(false)


const nameLong = 'pjw1'
switch(nameLong) {
    case 'pjw': {
        console.log('匹配上了')
        break;
    }

    default: {
        console.log('不知道啥名')
    }
}


// 经典函数
// 没有函数重载
function test() {
    const a = 1;
    // 返回值
    return a;
}

function add(name, age) {
    return name + age;
}

const name = 'aaa'
const age = 111
add(name, age)


// 简写
const functionSet = {
    test() {
    },
    add,
}


const renameADD = add;
console.log('加法测试', renameADD(1, 2))


// 匿名函数
const nimingfunction = function() {
    console.log('nimingfunction')
}

const arrowFunction = () => console.log('arrowFunction');
const arrowFunctionParam = (a, b) => a + b;
const arrowFunctionParam2 = (a, b) => {
    const t = a;
    const s = b;
    return t + s;
}
console.log(arrowFunctionParam2(1, 2))






