<template>
  <div style="height: 100%">
    <router-view />

    <van-tabbar v-show="!hiddenTabbar" v-model="active">
      <van-tabbar-item icon="home-o" to="main">主页</van-tabbar-item>
      <van-tabbar-item icon="search" to="case">案例</van-tabbar-item>
      <van-tabbar-item icon="phone-o" to="contact">联系</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import Clipboard from 'clipboard'
import { getSDK } from '@/utils/sdk'
export default {
  name: 'Shangcheng',
  data() {
    return {
      active: 0
    }
  },
  computed: {
    hiddenTabbar() {
      return this.$route.meta.hiddenTabbar
    }
  },
  created() {
    const data = {
      url: location.href.split('#')[0]
    }
    const updateAppMessageShareData = {
      title: '尚诚整体家居',
      desc: '崇尚品质生活\n竭诚为您服务',
      link: 'https://www.szqiye.club/company-hub/#/shangcheng',
      imgUrl: 'https://www.szqiye.club/company-hub/logos/shangcheng_logo.png',
      success: function() {
        // 设置成功
      }
    }
    const updateTimelineShareData = {
      title: '尚诚整体家居', // 分享标题
      link: 'https://www.szqiye.club/company-hub/#/shangcheng', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'https://www.szqiye.club/company-hub/logos/shangcheng_logo.png', // 分享图标
      success: function() {
        // 设置成功
      }
    }
    getSDK(data, updateAppMessageShareData, updateTimelineShareData)

    // 根据路由，激活tabbar样式
    if (this.$route.path.indexOf('contact') > -1) {
      this.active = 2
    } else if (this.$route.path.indexOf('case') > -1) {
      this.active = 1
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
