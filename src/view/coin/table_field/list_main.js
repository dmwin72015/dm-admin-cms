export default [
  {
    type: 'selection',
    width: 60,
    align: 'center'
  },
  {
    title: '#',
    width: 60,
    align: 'center',
    render: function(h, params) {
      return h('span', {}, (this.page - 1) * this.limit + params.index + 1)
    }
  },
  {
    title: 'ID',
    width: 70,
    key: 'cid'
  },
  {
    title: '名称',
    key: 'en_name'
  },
  {
    title: 'Symbol',
    key: 'symbol',
    width: 80
  },
  {
    title: '排名（市值）',
    key: 'rank'
  },
  {
    title: '最大供给量',
    key: 'max_supply'
  },
  {
    title: '总供给量',
    key: 'total_supply'
  },
  {
    title: '流通量',
    key: 'circulating_supply'
  }
]
