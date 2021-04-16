import { WeChatPayFunction } from 'src/interface/weChatPay.interface'
import { decrypt } from './decrypt'

export const weChatPay: WeChatPayFunction = ({
  url = 'https://api.mch.weixin.qq.com',
  schema = 'WECHATPAY2-SHA256-RSA2048',
  ...args
}) => {
  const config = { url, schema, ...args }

  return () => ({
    decrypt: decrypt(config)
  })
}
