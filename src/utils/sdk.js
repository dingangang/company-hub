import Vue from 'vue'
import wx from 'weixin-js-sdk'
import { getConfig } from '@/api/weixin'

export function getSDK(data, updateAppMessageShareData, updateTimelineShareData) {
  getConfig(data).then(res => {
    wx.config({
      debug: false, // 开启调试模式,
      appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
      timestamp: res.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.nonceStr, // 必填，生成签名的随机串
      signature: res.signature, // 必填，签名，见附录1
      jsApiList: [
        'scanQRCode',
        'updateTimelineShareData',
        'updateAppMessageShareData'
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })

    wx.ready(function() {
      console.log('微信jdk 成功调用')

      Vue.prototype.$wx = wx

      if (updateAppMessageShareData) {
        // 注册分享自定义的信息
        wx.updateAppMessageShareData(updateAppMessageShareData)
      }

      if (updateTimelineShareData) {
        // 注册朋友圈自定义的信息
        wx.updateTimelineShareData(updateTimelineShareData)
      }
    })

    wx.error(function() {
      console.log('微信jdk 出错了')
      // config信息验证后会执行ready方法，
      // 所有接口调用都必须在config接口获得结果之后，
      // config是一个客户端的异步操作，
      // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
      // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    })
  }).catch(e => {
    console.log(e)
  })
}
