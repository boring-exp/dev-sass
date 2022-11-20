const unique = Symbol('name');
const unique2 = Symbol('city')

const capacity = Symbol('capacity')
const Stack = {
    [capacity]: [], // 私有属性
    size: function () {
        return this[capacity].length;
    },
    push: function (item) {
        this[capacity].push(item)
    },
    pop: function () {
        return this[capacity].pop()
    }
}

// 打标
// 网络请求拦截器
{
    name: 'pjw',
    id: '1234567'
}

const traceId = Symbol('traceId')
{
    [traceId]: '2345678'
}



