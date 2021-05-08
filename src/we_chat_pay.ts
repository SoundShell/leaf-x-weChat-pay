import {initGetAppPay} from './app_pay';
import {initDecrypt} from './decrypt';
import {initGetHtml5Pay} from './html5_pay';
import {WeChatPay} from './interface/we_chat_pay.interface';
import {initGetJavascriptApiPay} from './javascript_api_pay';
import {initGetPublicKeyCertificate} from './public_key_certificate';
import {initShowPay} from './show_pay';
import {initValidateResponseSign} from './token';

export const weChatPay: WeChatPay = ({
  url = 'https://api.mch.weixin.qq.com',
  schema = 'WECHATPAY2-SHA256-RSA2048',
  ...args
}) => {
  const options = {url, schema, ...args};

  return {
    getAppPay: initGetAppPay(options),
    getHtml5Pay: initGetHtml5Pay(options),
    showPay: initShowPay(options),
    getJavascriptApiPay: initGetJavascriptApiPay(options),
    getPublicKeyCertificate: initGetPublicKeyCertificate(options),
    validateResponseSign: initValidateResponseSign(options),
    decrypt: initDecrypt(options),
  };
};
