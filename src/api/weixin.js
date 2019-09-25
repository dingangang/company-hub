import request from '@/utils/request'

export function getConfig(data) {
  return request({
    url: '/weixin/config',
    method: 'post',
    data: data
  })
}

