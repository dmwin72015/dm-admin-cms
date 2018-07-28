/** 币种API */
import { request as req } from '@/libs/api.request'
// 列表页
const coin_list_api = '/api/v1/coin'

// 获取coin list
export const getCoinListApi = params => {
  return req({
    url: coin_list_api,
    params,
    method: 'get'
  })
}
