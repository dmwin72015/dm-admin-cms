// 添加&编辑页面
<template>
  <Card class="add-coin">
    <p slot="title">
      <Icon type="md-create"></Icon> 添加币种
    </p>
    <Button type="success" icon="md-checkmark" slot="extra" class="save-btn" size="large">保存</Button>
    <Form ref="formInline" :model="coin_detail">
      <FormItem prop="user">
        <Input type="text" v-model="coin_detail.name" placeholder="英文名称" />
      </FormItem>
      <FormItem prop="password">
        <Input type="text" v-model="coin_detail.cn_name" placeholder="中文名称" />
      </FormItem>
      <FormItem prop="password">
        <Input type="text" v-model="coin_detail.symbol" placeholder="symbol/唯一标识" />
      </FormItem>
      <FormItem prop="password">
        <Input type="text" v-model="coin_detail.description" placeholder="简介" />
      </FormItem>
      <FormItem prop="password">
        <Input type="text" v-model="coin_detail.description" placeholder="中文名称" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>
  </Card>
</template>
<script>
export default {
  data() {
    return {
      coin_detail: {
        name: '',
        cn_name: '',
        rank: ''
      }
    }
  },
  methods: {
    // 提交
    handleSubmit() {}
  }
}
</script>
<style lang="less" scoped>
.add-coin {
  /deep/ .ivu-card-extra {
    top: 7px;
  }
}
</style>
