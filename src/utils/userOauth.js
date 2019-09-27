/*
* 这里是控制网页授权拉去用户信息的部分
* 会显示是裕朋财务，所以如果不是一定要拉去用户的信息，则不要启用该模块
* 模块相关用户信息储存到store还未完成
* */

import router from '../router'
// import store from '../store'
import { getUserOauth } from '../api/weixin'

// 从url中获取参数值
function getval(url, name) {
  const reg = new RegExp('(^|\\?|&)' + name + '=([^&|#]*)(\\s|&|#|$)', 'i') // 因为vue有添加“#”的特点，所以这里的正则表达式会匹配 & -- &/#
  if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, ' '))
  return ''
}

router.beforeEach((to, from, next) => {
  const locationUrl = window.location.href
  const openid = window.localStorage.getItem('openid') // 从内存取得openid

  if (!openid) { // 内存内没有openid
    // 检测是否参数内有code，若有则跳接口获取openid，若没有则跳授权页
    if (locationUrl.indexOf('code') >= 0) { // 链接里有code
      const params = {
        code: getval(locationUrl, 'code'),
        state: getval(locationUrl, 'state')
      }
      getUserOauth(params).then((res) => {
        console.log('拿去code以后换取的用户信息', res)
        // if (res.data.rel) {
        //   window.localStorage.setItem('openid', res.data.result.openid)
        //   window.localStorage.setItem('nickname', res.data.result.nickName)
        //   window.localStorage.setItem('userheadimg', res.data.result.userHeadimg)
        //   window.localStorage.setItem('amount', res.data.result.amount)
        //   // 存入vuex相关登陆信息
        //   store.commit('setUserMsg', res.data.result)
        //   store.commit('setOpenId', res.data.result.openid)
        // } else {
        //   console.log('登陆失败' + res.data.msg)
        // }
        next()
      }).catch((err) => {
        console.error('登陆失败' + err)
      })
    } else { // 链接里没有code
      const redirectHref = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        'wx04b59bb8f840c4c2' +
        '&redirect_uri=' +
        encodeURIComponent(locationUrl) +
        '&response_type=code&scope=snsapi_userinfo&state=' +
        'state' +
        '#wechat_redirect'
      window.location.href = redirectHref // 跳转微信链接获取code和state（state没啥用目前暂时）
    }
  } else { // 内存里有openid
    console.log('内存里有openid', openid)
    next()
    // const member = {}
    // member.nickName = window.localStorage.getItem('nickName')
    // member.userHeadimg = window.localStorage.getItem('userHeadimg')
    // member.amount = window.localStorage.getItem('amount')
    // store.commit('setUserMsg', member)
  }
})
