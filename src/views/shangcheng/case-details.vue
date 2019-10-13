<template>
  <div class="page">
    <van-nav-bar
      title="案例详情"
      left-arrow
      fixed
      @click-left="$router.go(-1)"
    />
    <div style="padding-top: 50px">
      <ul>
        <li v-for="item in images_list" :key="item.id" class="mb-small">
          <img
            :src="`${item.base_url}${item.case_id}/${item.filename}`"
            alt="1"
            style="width: 100%"
            lazy-load
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCaseDetailsList } from '@/api/weixin'
import qs from 'qs'

export default {
  name: 'ShangchengCaseDetails',
  created() {
    const dirname = this.$route.query.dirname
    const query = {
      dirname
    }

    // 根据路由参数拉取详情
    getCaseDetailsList(qs.stringify(query))
      .then(res => {
        console.log('res', res)
        if (res.code === 200) {
          this.images_list = res.list
        }
      })
  },
  data() {
    return {
      images_list: []
    }
  },
}
</script>

<style scoped>

</style>
