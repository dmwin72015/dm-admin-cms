// 币种列表页
<template>
  <div>
    <Form ref="formInline" :model="search_condition" :rules="condition_rule" inline>
      <FormItem prop="user">
        <Input type="text" size="large" v-model="search_condition.name" placeholder="名字" style="width:240px">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" size="large" v-model="search_condition.symbol" placeholder="Symbol" style="width:240px">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" size="large">查询</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" size="large">添加</Button>
      </FormItem>
      <FormItem>
        <Button type="error" @click="handleSubmit('formInline')" size="large">删除</Button>
      </FormItem>
    </Form>
    <Table border :columns="colums" :data="list" :loading="loading" size="large" class="my-mid-table"></Table>
    <Page :total="coinTotal" :page-size="limit" :page-size-opts="[50,100,200,300,500]" @on-change="changePage" @on-page-size-change="changePageSize" show-sizer show-elevator show-total class="pagination-wrap"></Page>
  </div>
</template>
<script>
import field from './table_field/list_main.js'
import { mapState, mapActions } from 'vuex'
const buttons = {
  title: '操作',
  key: 'action',
  width: 150,
  align: 'center',
  render: (h, params) => {
    return h('div', [
      h(
        'Button',
        {
          props: {
            type: 'primary',
            size: 'small'
          },
          style: {
            marginRight: '5px'
          },
          on: {
            click: () => {
              this.show(params.index)
            }
          }
        },
        '编辑'
      ),
      h(
        'Button',
        {
          props: {
            type: 'error',
            size: 'small'
          },
          on: {
            click: () => {
              this.remove(params.index)
            }
          }
        },
        '删除'
      )
    ])
  }
}
export default {
  name: 'coin-list',
  data() {
    return {
      page: 1,
      limit: 100,
      loading: false, // 获取数据中
      search_condition: {
        name: '',
        symbol: ''
      },
      condition_rule: {
        name: [{ required: true, message: '请输入名字', trigger: 'blur' }],
        symbol: [{ required: true, message: '请输入symbol', trigger: 'blur' }, { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getData()
  },
  computed: {
    ...mapState({
      coinList: state => state.coin.coinList,
      coinTotal: state => state.coin.coinTotal
    }),
    // 数据
    list() {
      console.log(this)
      if (this.coinList.length) {
        return this.coinList
      } else {
        return []
      }
    },
    // 列名字
    colums() {
      return field.concat(buttons).map(ele => {
        if (ele.render) {
          ele.render = ele.render.bind(this)
        }
        return ele
      })
    }
  },
  methods: {
    ...mapActions({
      getCoinList: 'getCoinList'
    }),
    // 搜索功能
    handleSubmit() {},
    // 切换页数 TODO: 后台
    changePage(page = 1) {
      this.page = page
      this.getData()
    },
    // 切换每页总页数 TODO: 后台
    changePageSize(pageSize = 100) {
      this.limit = pageSize
      this.getData()
    },
    // 获取数据
    getData() {
      this.loading = true
      return this.getCoinList({
        page: this.page,
        limit: this.limit
      })
        .then(res => {
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          throw err
        })
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
