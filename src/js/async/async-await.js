// wrapper 函数，拨开promise，把返回值取出来



// async await
async function test() {
    const value1 = await Promise.resolve(1)
    const value2 = await Promise.resolve(2)
    const value3 = await Promise.resolve(3)
    const value4 = await Promise.resolve(4)
    console.log(value1, value2, value3, value4)
}

test()


