<template>
  <div class="page">
    <div class="c-title">精品案例</div>

    <van-grid :column-num="2">
      <van-grid-item @click="goDetails">
        <van-image src="/company-hub/static/shangcheng/covers/cover1.jpg" />
        <span class="c-desc">2-40X 简约时尚风 （浅灰、纯白+间色）</span>
      </van-grid-item>
      <van-grid-item
        v-for="value in 5"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'ShangchengCase',
  methods: {
    goDetails() {
      this.$router.push('case-details')
    }
  },
}
</script>

<style lang="scss" scoped>
  .page {
    height: calc(100% - 55px);
  }
  .c-title {
    line-height: 50px;
    font-size: 18px;
    text-align: center;
  }
  .c-desc {
    font-size: 12px;
    color: #666;
    line-height: 20px;
  }
</style>
