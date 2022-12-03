setTimeout(() => {
    console.log('hello world');
    setTimeout(() => {
        console.log('hello world');
        setTimeout(() => {
            console.log('hello world')
        }, 2000)
    }, 2000)
}, 2000)


const task = new Promise((resolve, reject) => {
    // 怎么写
});

task.then().then().then();