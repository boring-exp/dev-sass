const task = new Promise((resolve, reject) => {
    // 怎么写 >=2000 不是精确的定时器
    setTimeout(() => {
        resolve()
    }, 2000)
});

task.then(() => {
    console.log('hello world')
    return new Promise((resolve, reject) => {
        // 怎么写 >=2000 不是精确的定时器
        setTimeout(() => {
            resolve()
        }, 2000)
    });
}).then(
    () => {
        console.log('hello world')
        return new Promise((resolve, reject) => {
            // 怎么写 >=2000 不是精确的定时器
            setTimeout(() => {
                resolve()
            }, 2000)
        });
    }
).then(
    () => {
        console.log('hello world')
    }
);