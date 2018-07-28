import HttpRequest from '@/libs/axios'
const axios = new HttpRequest()

let request = axios.request.bind(axios)

export { request }
export default axios
