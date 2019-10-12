<template>
  <div class="page">
    <van-nav-bar
      title="编辑新案例"
    />
    <van-cell-group>
      <van-cell-group>
        <van-field
          v-model="form.title"
          placeholder="请输入标题,15字内"
          required
          clearable
          label="标题"
          maxlength="15"
        />
        <van-field
          v-model="form.desc"
          placeholder="请输入描述，30字内"
          required
          clearable
          label="描述"
          maxlength="30"
        />
      </van-cell-group>
    </van-cell-group>
    <div class="mt-tiny p-tiny">
      <van-uploader
        v-model="fileList"
        :after-read="afterRead"
        multiple
      />
    </div>
    <div class="text-center mt-small">
      <van-button
        type="primary"
        :loading="isUploading"
        @click="submit"
      >确认上传</van-button>
    </div>
  </div>
</template>

<script>
import { uploadFile } from '@/api/weixin'
import qs from 'qs'

export default {
  name: 'ShangchengUpload',
  data() {
    return {
      form: {
        title: '',
        desc: ''
      },
      fileList: [],
      formData: new FormData(),
      isUploading: false
    }
  },
  methods: {
    afterRead(file) {
      console.log(file)
      // 判定是单个文件读取还是多个
      if (file instanceof Array) {
        file.map(item => {
          this.formData.append('files', item.file)
        })
      } else {
        this.formData.append('files', file.file)
      }
    },
    submit() {
      // 校验
      if (this.form.title === '') {
        this.$toast('标题不能为空')
        return
      } else if (this.form.desc === '') {
        this.$toast('描述不能为空')
        return
      } else if (this.fileList.length === 0) {
        this.$toast('至少上传一张图片')
        return
      }

      this.isUploading = true

      uploadFile(this.formData, qs.stringify(this.form)).then(res => {
        console.log('res', res)
        this.$toast('上传成功')
        this.isUploading = false
      }).catch(err => {
        console.error(err)
        this.$toast('上传失败，请联系管理员')
        this.isUploading = true
      })
    }
  }
}
</script>

<style scoped>

</style>
