



// 1. 全局声明的函数中的this，默认指向global
function getGlobal() {
    console.log(this)
}

// 2. 对象中函数中的this，取决于调用者
const test = {
    name: 'pjw',
    info: {
        age: 12,
        getAge() {
            console.log(this.name)
        }
    }
}


const inner = {
    name: 'pjw',
    getGlobal
}

inner.getGlobal();

getGlobal()


// 手动改变this
const utilSet = {
    request: function() {
        console.log(this)
        console.log('网络请求')
    },
    computed: function(a, b) {
        return a + b
    }
}
utilSet.request();

// apply, call
const obj = {
    animal: 'dog'
}

function objTest(msg, msg2) {
    console.log(this)
    console.log(msg, msg2)
}

const objTestBindToObj = objTest.bind(obj)
objTestBindToObj('aha', 'sss')

objTest.apply(obj, ['和', '啊啊'])
objTest.call(obj, '和', '啊啊')

utilSet.request.call(obj) // 等价于 obj.request()

// bind



