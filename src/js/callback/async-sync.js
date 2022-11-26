// 1.同步
// 2.异步
// 3.同步阻塞
// 4.同步非阻塞


// 异步的
// callback hell
setTimeout(() => {
    console.log('身份信息')
    setTimeout(() => {
        console.log('获取了快递信息')
        setTimeout(() => {
            console.log('获取shunfen快递')
            setTimeout(() => {
                console.log('获取商品信息')
                setTimeout(() => {
                    console.log('获取价格信息')
                }, 3000)
            }, 3000)
        }, 3000)
    }, 3000)
}, 3000)


