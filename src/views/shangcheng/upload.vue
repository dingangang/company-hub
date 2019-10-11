<template>
  <div class="page">
    <van-uploader
      v-model="fileList"
      :after-read="afterRead"
      multiple
    />
  </div>
</template>

<script>
import { uploadFile } from '@/api/weixin'
export default {
  name: 'ShangchengUpload',
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      const formData = new FormData()
      formData.append('files', file.file)
      uploadFile(formData).then(res => {
        console.log('res', res)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
