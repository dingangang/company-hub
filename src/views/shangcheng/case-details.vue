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
        <li v-for="item in 7" :key="item" class="mb-small">
          <img
            :src="`/company-hub/customer/shangcheng/cs101/${item}.jpg`"
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
export default {
  name: 'ShangchengCaseDetails'
}
</script>

<style scoped>

</style>
