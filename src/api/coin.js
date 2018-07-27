/** 币种API */
import axios from '@/libs/api.request'

// 列表页
const coin_list_api = '/api/v1/coin'

// 获取coin list
export const getCoinListApi = (params) => {
  return axios.request({
    url: coin_list_api,
    params,
    method: 'get'
  })
}
