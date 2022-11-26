// api调用，callback函数

const paramObject = {
    timeStamp: '',
    nonceStr: '',
    success: (res/**声明 */) => {
        console.log(res)
    }
}

const paramObject1 = {
    timeStamp: '',
    nonceStr: '',
    success: function() {}
}

function handle() {}

const paramObject2 = {
    timeStamp: '',
    nonceStr: '',
    success: handle
}

function success() {}

const paramObject3 = {
    timeStamp: '',
    nonceStr: '',
    success,
}

function success() {}

const paramObject3 = {
    timeStamp: '',
    nonceStr: '',
    success() {
        console.log('hhh')
    },
    fail() {
        console.log('hhh')
    },
}

// if () {
//     success() {
//         console.log('hhh')
//     };
// }
wx.requestPayment(paramObject)
