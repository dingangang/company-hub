import request from '@/utils/request'

// 获取jssdk必要config
export function getConfig(data) {
  return request({
    url: '/weixin/config',
    method: 'post',
    data: data
  })
}

// 网页授权接口
export function getUserOauth(params) {
  return request({
    url: '/weixin/oauth',
    method: 'get',
    params
  })
}

