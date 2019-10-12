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
      path: '/xinjiejia/details',
      name: 'XinJieJiaDetails',
      component: () => import(/* webpackChunkName: "xinjiejia" */ './views/xinjiejia/details.vue'),
      meta: { title: '客户预约列表' }
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import(/* webpackChunkName: "xinjiejia" */ './views/test/index.vue'),
      meta: { title: '欣洁家家电清洗' }
    },
    {
      path: '/shangcheng',
      name: 'Shangcheng',
      redirect: '/shangcheng/main',
      component: () => import(/* webpackChunkName: "shangcheng" */ './views/shangcheng/index.vue'),
      children: [
        {
          path: 'main',
          component: () => import(/* webpackChunkName: "shangcheng" */ './views/shangcheng/main.vue'),
          meta: { title: '尚诚整体家居' }
        },
        {
          path: 'contact',
          component: () => import(/* webpackChunkName: "shangcheng" */ './views/shangcheng/contact.vue'),
          meta: { title: '尚诚整体家居' }
        },
        {
          path: 'case',
          component: () => import(/* webpackChunkName: "shangcheng" */ './views/shangcheng/case.vue'),
          meta: { title: '尚诚整体家居' }
        },
        {
          path: 'case-details',
          component: () => import(/* webpackChunkName: "shangcheng" */ './views/shangcheng/case-details.vue'),
          meta: {
            hiddenTabbar: true,
            title: '尚诚整体家居'
          }
        },
        {
          path: 'upload',
          component: () => import(/* webpackChunkName: "shangcheng" */ './views/shangcheng/upload.vue'),
          meta: {
            hiddenTabbar: true,
            title: '尚诚整体家居'
          }
        }
      ]
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: () => import(/* webpackChunkName: "main" */ './views/404.vue')
    }
  ]
})
