const { Value } = require("sass")

const str = 'hell0'
if(str.indexOf('l0') > -1) {
    console.log(str.indexOf('l0'))
    console.log('hello')
}
const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; SM-N9100 Build/LRX21V) > AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 > Chrome/37.0.0.0 Mobile Safari/537.36 > MicroMessenger/6.0.2.56_r958800.520 NetType/WIFI'

console.log(userAgent.toLowerCase().includes('micromessenger'))


const reg = /micromessengert/g;
console.log(userAgent.toLowerCase().match(reg))

const str2 = '1:2:3:4:5:6:7:8:9:0'
console.log(str2.slice(1, 3))
// const str2ToArr = str2.split('')
// console.log(str2ToArr.join(''))
console.log(str2.split(':'))






// url路径参数
const url = 'https://www.baidu.com/s?wd=vue&rsv_spt=1&rsv_iqid=0xa5d93f9e0009e6e3&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=4&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=vue&rsp=8&inputT=706&rsv_sug4=7723'




function urlParser(url) {
    const resultSet = {}
    url.split('?')[1]
        .split('&')
        .forEach(str => {
            const pair = str.split('=')
            resultSet[pair[0]] = pair[1]
        })
    return resultSet;
}
console.log(urlParser(url))
