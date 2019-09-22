<template>
  <div class="login-page">
    <h2 class="text-center" style="position: absolute; top: 10vh; width: 100%;">Login</h2>
    <div>
      <van-cell-group class="login-form">
        <van-field
          v-model="loginForm.username"
          clearable
          placeholder="请输入用户名"
          autocomplete="off"
        >
          <span slot="label">
            用户名
          </span>
        </van-field>

        <van-field
          v-model="loginForm.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          autocomplete="off"
        >
          <span slot="label">
            密码
          </span>
        </van-field>
      </van-cell-group>
      <div class="text-center">
        <van-button
          :loading="isLoading"
          class="login-btn"
          size="large"
          type="info"
          loading-type="spinner"
          loading-text="登录中..."
          @click="login"
        >登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '1'
      },
      isLoading: false
    }
  },
  methods: {
    /**
     * 登录方法
     */
    login() {
      this.isLoading = true
      this.$store.dispatch('login', this.loginForm)
        .then(res => {
          console.log('登录返回', res)
          this.$router.push({ path: '/main' })
        }).catch(error => {
          this.$message.error(error)
          this.isLoading = false
        })
    },
    /**
     * 设置按钮点击处理
     */
    onClickRight() {
      alert('预留')
    }
  }
}
</script>

<style scoped>
.login-form {
  margin: 0 10%;
}
.van-nav-bar .van-icon.white-icon {
  color: #fff;
}
.login-page {
  height: 100%;
  padding-top: 40vh;
  background: url("../../assets/bg.png") no-repeat top;
  background-size: 100% 200px;
}
.login-btn {
  width: 80%;
  margin-top: 30px;
}
</style>
