// 最终的方案
async function main() {
    // 同步的
    const a = await requestWeatherInfo('镇江') // promise
    console.log(a)
    return 1;
}

const result = await main()
console.log(result)


// 事件循环
// promise到底怎么做的，我能不能实现一个自己的promise对象，mypromise