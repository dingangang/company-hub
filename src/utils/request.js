import axios from 'axios'
// import store from '@/store'
// import router from '@/router'
// import { Dialog } from 'vant'
import { getToken } from '@/utils/auth'
// import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url Mock
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 25000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // qs转码参数，如不需要请自行配置
    // if (config.data && typeof (config.data) !== 'string') {
    //   config.data = qs.stringify(config.data)
    // }
    // 可以在这里给请求头加自定义头部
    const token = getToken()
    if (token) {
      config.headers['X-Token'] = token
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
  */
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data

    // 返回数据的一些操作，可自行配置，此时store和router都可以使用,自行引入

    // if (res.code === 50008) {
    //   Dialog.confirm({
    //     title: '提示',
    //     message: '您已经被登出，请重新登陆。'
    //   }).then(() => {
    //     console.log('执行一些退出的操作')
    //     router.push({ path: '/' })
    //   })
    // }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
