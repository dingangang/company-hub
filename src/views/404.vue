<template>
  <div class="text-center p-small">
    Page not found!
    <div class="mt-large">
      <van-button type="primary" size="small" @click="$router.go(-1)">返回</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>

</style>
