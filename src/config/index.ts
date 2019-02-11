/** 
 * 项目配置文件
 */

/** 
 * 线上环境
 */
// export const ONLINEHOST = 'http://api.juheapi.com'
export const ONLINEHOST = 'https://api.wisy.demo.ioi.nz'

/** 
 * 测试环境
 */
// export const QAHOST = 'http://xxx.cn'
export const QAHOST = 'https://api.wisy.demo.ioi.nz'

/** 
 * 线上mock
 */
export const MOCKHOST = 'http://xxx/mock'

/** 
 * 是否mock
 */
export const ISMOCK = false

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST = ONLINEHOST

/**
 * 全局的分享信息 不用每一个都去写
 */
export const SHAREINFO = {
  'title': '分享标题',
  'path': '路径',
  'imageUrl': '图片'
}