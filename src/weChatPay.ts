import { WeChatPay } from '../src/interface/weChatPay.interface'
import { initGetAppPay } from './appPay'
import { initDecrypt } from './decrypt'
import { initGetHtml5Pay } from './html5Pay'
import { initGetJavascriptApiPay } from './javascriptApiPay'
import { initGetPublicKeyCertificate } from './publicKeyCertificate'
import { initShowPay } from './showPay'
import { initValidateResponseSign } from './token'

export const weChatPay: WeChatPay = ({
  url = 'https://api.mch.weixin.qq.com',
  schema = 'WECHATPAY2-SHA256-RSA2048',
  ...args
}) => {
  const options = { url, schema, ...args }

  return {
    getAppPay: initGetAppPay(options),
    getHtml5Pay: initGetHtml5Pay(options),
    showPay: initShowPay(options),
    getJavascriptApiPay: initGetJavascriptApiPay(options),
    getPublicKeyCertificate: initGetPublicKeyCertificate(options),
    validateResponseSign: initValidateResponseSign(options),
    decrypt: initDecrypt(options)
  }
}
