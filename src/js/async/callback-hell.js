// 回调地狱问题
request((res) => {
    EventBus.$emit('01', {res})
    // TODO: HANDLE
    request((res) => {
        // TODO: handle
        request((res) => {
            //TODO: handle
            ...request()
        })
    })
})

EventBus.on('01', (res) => {
    request((res) => {
        EventBus.$emit('02', {res})
    })
})

EventBus.on('02', (res) => {

})



Promise(request())
    .then((res) => {request()})
    .then((res)=> {request()})
    .then(res => {})
    .then(() => console)