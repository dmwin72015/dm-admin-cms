import { getCoinListApi } from '@/api/coin'

export default {
  state: {
    coinList: -1, // 默认初始化状态
    coinTotal: 0 // 总数
  },
  mutations: {
    set_coinList(state, list = []) {
      state.coinList = list
    },
    set_coinTotal(state, total = 0) {
      state.coinTotal = total
    }
  },
  actions: {
    /**
     * 获取coin list
     * @param { Number } params.limit - 每页数量 | default 100
     * @param { Number } params.page  - 页数     | default 1
     * @param { Number } params.sort  - 排序规则  1：ID正序 -1：ID倒序  | default 1
     */
    getCoinList({ commit }, params) {
      return new Promise((resolve, reject) => {
        getCoinListApi(params)
          .then(resp => {
            if (resp.code === 0) {
              commit('set_coinTotal', resp.data.count)
              commit('set_coinList', resp.data.items)
              resolve(resp.data.items)
            } else {
              commit('set_coinList', [])
              reject(new Error('暂无数据'))
            }
          })
          .catch(err => {
            commit('set_coinList', [])
            reject(err)
          })
      })
    }
  }
}
