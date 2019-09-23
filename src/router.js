import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "main" */ './views/main/index.vue')
    },
    {
      path: '/xinjiejia',
      name: 'XinJieJia',
      component: () => import(/* webpackChunkName: "xinjiejia" */ './views/xinjiejia/index.vue'),
      meta: { title: '欣洁家家电清洗' }
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: () => import(/* webpackChunkName: "main" */ './views/404.vue')
    }
  ]
})
