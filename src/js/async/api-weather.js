const axios = require('axios')
const appCode = 'e67569a8e9b14afcad2937a9d6774cea'
axios({
    headers: {
        Authorization: `APPCODE e36e4f85632f48d8bf3a4b12e260877e`
    },
    method: 'get',
    url: `http://jisutqybmf.market.alicloudapi.com/weather/query`,
    params: {
        city: '镇江'
    }
}).then((res) => {
    console.log(res.data)
}).catch(error => {
    console.log(error)
})

// async function main() {
//     axios.post('http://tianqimore.market.alicloudapi.com/weather?AppCode=${appCode}', {src: 'hebei'}).then((res) => console.log(res))
// }

// main()