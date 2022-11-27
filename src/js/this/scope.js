// 1.函数作用域
// 2.全局作用域
// 3.es2015/es6 块作用域
// with,eval
// eval("console.log('1')")

// var let const
// const name = 'pjw'

test()
function test() {
    // 暂时性死区
    console.log(name)
    const name = 'hahah'
    function() {
        console.log(name)
    }
}
// 变量提升
// var name = 'aaa';

// 块级别作用，let/const关键字，关键字所在scope变成块作用域

for(let i = 0; i < 10; i++) {
    console.log(i)
}