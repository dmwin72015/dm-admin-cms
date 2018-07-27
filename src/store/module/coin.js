import { getCoinListApi } from '@/api/coin'

export default {
  state: {
    coinList: -1 // 默认初始化状态
  },
  mutations: {
    set_coinList (state, avatorPath) {
      state.avatorImgPath = avatorPath
    }
  },
  actions: {
    /**
     * 获取coin list
     * @param { Number } params.limit - 每页数量
     * @param { Number } params.page  - 页数
     */
    getCoinListApi ({ commit }, params) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        getCoinListApi(params).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
