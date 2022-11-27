'use strict'

function test() {
    console.log(this)
}

test()

// 箭头函数没有this
// 回调函数尽量使用箭头函数