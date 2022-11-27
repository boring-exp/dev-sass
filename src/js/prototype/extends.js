function parent() {
    this.name = 'pjw';
    this.age = 23
}

parent.prototype.getMoney = function() {
    console.log('获取100元')
}

const child = new parent()
child.getMoney()

const simpleChild = {}


// 手动更改普通对象的__proto__指向
simpleChild.__proto__ = parent.prototype

simpleChild.getMoney()
console.log(simpleChild)

// golang
// 函数式 + 组合的方式

const annimal = {

}

function walk(annimal) {
    xxxxxx(annimal)
}