import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Vant from 'vant'
import { Lazyload } from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import '@/styles/index.scss'
import dayjs from 'dayjs'
import { mockXHR } from '../mock'
import './icons' // icon
import md5 from 'js-md5'
// import './permission' // permission control

Vue.use(Vant)

Vue.prototype.$dayjs = dayjs

Vue.prototype.$md5 = md5

Vue.config.productionTip = false

Vue.use(Lazyload)

mockXHR()

// 动态title
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
