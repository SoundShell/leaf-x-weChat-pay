import { WeChatPay } from 'src/interface/weChatPay.interface'
import { initAppPay } from './appPay'
import { initDecrypt } from './decrypt'
import { initHtml5Pay } from './html5Pay'
import { initJavascriptApiPay } from './javascriptApiPay'
import { initPublicKeyCertificate } from './publicKeyCertificate'
import { initShowPay } from './showPay'
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
    showPay: initShowPay(options),
    getJavascriptApiPay: initJavascriptApiPay(options),
    getPublicKeyCertificate: initPublicKeyCertificate(options),
    validateResponseSign: initValidateResponseSign(options),
    decrypt: initDecrypt(options)
  })
}
