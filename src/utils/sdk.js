import wx from 'weixin-js-sdk'
import { getConfig } from '@/api/weixin'

export function getSDK(data) {
  getConfig(data).then(res => {
    alert(JSON.stringify(res))
    wx.config({
      debug: true, // 开启调试模式,
      appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
      timestamp: res.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.nonceStr, // 必填，生成签名的随机串
      signature: res.signature, // 必填，签名，见附录1
      jsApiList: ['scanQRCode',
        'updateTimelineShareData',
        'updateAppMessageShareData',
        'onMenuShareAppMessage',
        'onMenuShareTimeline'
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })

    wx.ready(function() {
      console.log('微信jdk 成功调用')
      wx.updateAppMessageShareData({
        title: '自定义标题',
        desc: '自定义描述',
        link: 'https://www.szqiye.club/company-hub/#/xinjiejia',
        imgUrl: 'https://www.szqiye.club/company-hub/A.jpg',
        success: function() {
          // 设置成功
          alert('自定义分享设置成功')
        },
        fail: function(e) {
          alert(e)
        }
      })

      wx.updateTimelineShareData({
        title: '自定义标题', // 分享标题
        link: 'https://www.szqiye.club/company-hub/#/xinjiejia', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://www.szqiye.club/company-hub/A.jpg', // 分享图标
        success: function() {
          alert('自定义朋友圈成功')
          // 设置成功
        },
        fail: function(e) {
          alert(e)
        }
      })
      // config信息验证后会执行ready方法，
      // 所有接口调用都必须在config接口获得结果之后，
      // config是一个客户端的异步操作，
      // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
      // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    })

    wx.error(function() {
      console.log('微信jdk 出错了')
      // config信息验证后会执行ready方法，
      // 所有接口调用都必须在config接口获得结果之后，
      // config是一个客户端的异步操作，
      // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
      // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    })
  })
}
