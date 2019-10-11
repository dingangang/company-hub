<template>
  <div class="page">
    <div class="text-center mt-medium">
      <h2>联系电话：<a ref="phone" href="tel:17716769200" class="text-link" style="font-style: italic;text-decoration: underline">17716769200</a> 游先生</h2>
      <van-button type="info" class="mt-small" @click="startCall">拨打电话</van-button>
    </div>

    <div class="text-center mt-medium qrCode">
      <h2 class="text-red">长按下面的二维码，添加店家微信 ↓↓↓</h2>
      <img src="@/assets/xinjiejia/xinjiejiaQR.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShangchengContact',
  methods: {
    startCall() {
      window.location.href = 'tel://17716769200'
    }
  }
}
</script>

<style lang="scss" scoped>
  .qrCode {
    > img {
      width: 70%;
    }
  }
</style>
