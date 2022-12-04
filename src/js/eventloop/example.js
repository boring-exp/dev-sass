function finishTask(p) {
    p.then((res) => console.log(res))
}

setTimout(() => {
    const finishTask = Promise.resolve(1)
    callback(finishTask)
}, 3000)


状态1
执行栈                      任务队列
setTimeout                 () => {const finishTask = Promise.resolve(1) callback(finishTask)}

状态2
执行栈                      任务队列
                            () => {const finishTask = Promise.resolve(1) callback(finishTask)}

状态3
执行栈                                                                  任务队列
() => {const finishTask = Promise.resolve(1) callback(finishTask)}

状态4
执行栈                                                                  任务队列
p.then() // 微任务                                                      [(res) => console.log(res)] 微任务队列
callback(finishTask)
() => {const finishTask = Promise.resolve(1) callback(finishTask)}

状态5
执行栈                                                                  任务队列
                                                                        [(res) => console.log(res)] 微任务队列

状态6
执行栈                                                                  任务队列
[(res) => console.log(res)]