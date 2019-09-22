<template>
  <div class="page" />
</template>

<script>
export default {
  name: 'Index',
  created() {
    const query = this.$route.query
    console.log(query)
    if (query) {
      switch (query.name) {
        case 'xinjiejia':
          this.$router.push('/xinjiejia')
          break
        case 'somewhere':
          this.$router.push('/somewhere')
          break
        default:
          console.log('not match')
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
