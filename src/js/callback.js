const callback = (msg) => console.log(msg)
const callback2 = () => console.log('哈哈哈，笑死')
const param = {
    callback,
}



// 1.接受一个参数，这个参数是对象
// 2.对象上有一个key叫做callback，他可以被handle执行，handle执行的时候，传递实参
handle(param)


// 此部分是平台的实现
// function handle(callback) {
//     callback('hello')
// }

function handle(param) {
    param.callback('哈哈哈，搞定');
}


// const paramsWeixin = {
//     success: function success(res) {
//         console.log(res)
//     },
// }

// wx.getClipboardData(paramsWeixin)


// // 微信内部工程工作
// module wx {
//     getClipboardData(param) {
//         // 乱七八糟
//         const msg = getCliCotentFromAndorid();
//         param.success(msg)
//     }
// }