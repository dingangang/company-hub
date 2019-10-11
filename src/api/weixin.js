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

// 添加预约信息
export function submitBookInfo(data) {
  return request({
    url: '/weixin/messages',
    method: 'post',
    data
  })
}

// 添加预约信息
export function getBookCustomers() {
  return request({
    url: '/weixin/messages',
    method: 'get'
  })
}

// 按电话查询客户
export function getBookCustomer(params) {
  return request({
    url: `/weixin/messages/${params}`,
    method: 'get'
  })
}

// 上传图片
export function uploadFile(data) {
  // return axios.put('/weixin/upload', data, {
  //   method: 'put'
  // })
  return request({
    url: '/weixin/upload',
    method: 'put',
    data
  })
}
