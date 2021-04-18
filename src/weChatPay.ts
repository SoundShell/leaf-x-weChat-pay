import { WeChatPay } from 'src/interface/weChatPay.interface'
import { initAppPay } from './appPay'

export const weChatPay: WeChatPay = ({
  url = 'https://api.mch.weixin.qq.com',
  schema = 'WECHATPAY2-SHA256-RSA2048',
  ...args
}) => {
  const options = { url, schema, ...args }

  return () => ({
    getAppPay: initAppPay(options)
    // decrypt: decrypt(options)
  })
}
