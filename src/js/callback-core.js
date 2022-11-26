const fn = () => console.log('名字获取成功')
const callback = function (name/**参数可以获取某个api的数据 */) {
    /**函数体里面实现我们自己的逻辑 */
}






// 1. param1 callback
// 函数的声明，方法的声明，函数签名，方法签名
// getName()
// callback函数的参数声明
// 第一个参数是用户名
// function getName(callback) {
//     // 平台数据获取
//     const name = 'pjw'
//     callback(name)
// }


function handleCash(leftCash/** 获取到的 */) {
    console.log('现金额度', leftCash)
}

const paramObject = {
    name: 'zgyh',
    site: 'zhenjiang',
    callback: handleCash
}

getLeftCash(paramObject)

/**
 * @object 对象
 * @key name
 * @key site
 * @key callback 获取余额
 */
function getLeftCash(backInfo) {
    // 平台数据获取
    const { name: backName, site } = backInfo;
    const leftCash = mockCach(backName, site);
    backInfo.callback(leftCash)
}

function mockCach(name, site) {
    // 查询
    return 100;
}
