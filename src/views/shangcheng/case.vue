<template>
  <div class="page">
    <div class="c-title">精品案例</div>

    <van-grid :column-num="2">
      <van-grid-item v-for="(item, index) in caseList" :key="index" @click="goDetails(item.dirname)">
        <van-image class="ct-image" :src="item.cover_path" />
        <span class="c-desc">{{ item.desc }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getCaseCoverList } from '@/api/weixin'
import qs from 'qs'

export default {
  name: 'ShangchengCase',
  data() {
    return {
      caseList: []
    }
  },
  created() {
    const query = {
      limit: 20,
      offset: 0
    }
    getCaseCoverList(qs.stringify(query)).then(res => {
      console.log('res', res)
      this.caseList = res
    })
  },
  methods: {
    goDetails(dirname) {
      this.$router.push(`case-details?dirname=${dirname}`)
    }
  }
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
