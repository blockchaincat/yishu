<template>
  <div>
    <table>
      <thead>
      <tr>
        <th class="setting-head responsive-head"></th>
        <th></th>
      </tr>
      </thead>
      <tbody class="base">
        <tr>
          <td class="setting-title">昵称</td>
          <td>
            <input type="text" v-model="nickname" placeholder="请输入昵称">
          </td>
        </tr>
        <tr>
          <td class="setting-title">电子邮件</td>
          <td>
            <form action="">
              <input type="button" value="发送" class="btn btn-hollow pull-right">
              <input type="email" placeholder="请输入你的常用邮箱">
            </form>
          </td>
        </tr>
        <tr>
          <td class="setting-title setting-verticle">语言设置</td>
          <td>
            <div class="col-xs-8">
              <input type="radio" value="zh-CN">
              <span>中文简体</span>
            </div>
            <div class="col-xs-16">
              <input type="radio" value="zh-TW">
              <span>中文繁体</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props:['userInfo'],
    data(){
      return {
        nickname:this.userInfo.username
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus">
</style>
