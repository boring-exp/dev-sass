// 回调函数场景
const paramObj = {
    name: 'pjw',
    getName() {
        console.log(this)
    },
    timer: function () {
        setTimeout(function () {
            console.log(this.name, '1s')
        }.bind(this), 1000)
    },
    timer2: function () {
        setTimeout(() => {
            console.log(this.name, '1s')
        }, 1000)
    }
}

paramObj.timer()

const test = paramObj.getName



// handle()
handle(paramObj.getName.bind(paramObj))

function handle(callback) {
    callback()
}





