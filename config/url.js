/**
 * 根据环境 判断使用使用接口
 * host 前端域名
 * server 后端接口域名
 * ws socket域名
 */
const baseUrls = [
  {
    host: 'localhost:',
    server: 'http://serve.dm.cc',
    ws: ''
  }
]

let host = document.host

let result = baseUrls.filter(ele => ele.host.indexOf(host) !== -1)[0] || baseUrls[0]

export default result
