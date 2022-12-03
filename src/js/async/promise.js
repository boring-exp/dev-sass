const task = Promise.resolve(); // task 就是一个promise对象

const param1 = function(res) {
    // 接受执行成功之后的返回值
    console.lot(res)
}

const param2 = function(res) {
    // 接收执行失败之后的返回值（错误）
}


task.then((res) => {
    return 1
    // return new Promise()
}).then(() => {
    return 1;
}).then(() => {

}).catch(() => {
    
})
// fulfill



// reject

function then(successCb) {
    const result = successCb();
    return new Promise.resolve(result)
}