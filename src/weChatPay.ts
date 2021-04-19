import { WeChatPay } from 'src/interface/weChatPay.interface'
import { initAppPay } from './appPay'
import { initDecrypt } from './decrypt'
import { initHtml5Pay } from './html5Pay'
import { initIndexPay } from './indexPay'
import { initJavascriptApiPay } from './javascriptApiPay'
import { initPublicKeyCertificate } from './publicKeyCertificate'
import { initValidateResponseSign } from './token'

export const weChatPay: WeChatPay = ({
  url = 'https://api.mch.weixin.qq.com',
  schema = 'WECHATPAY2-SHA256-RSA2048',
  ...args
}) => {
  const options = { url, schema, ...args }

  return () => ({
    getAppPay: initAppPay(options),
    getHtml5Pay: initHtml5Pay(options),
    indexPay: initIndexPay(options),
    getJavascriptApiPay: initJavascriptApiPay(options),
    getPublicKeyCertificate: initPublicKeyCertificate(options),
    validateResponseSign: initValidateResponseSign(options),
    decrypt: initDecrypt(options)
  })
}
