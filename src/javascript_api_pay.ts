import {InitGetJavascriptApiPay} from './interface/javascript_api_pay.interface';
import {initRequest} from './request';
import {getJavascriptApiPayToken} from './token';

export const initGetJavascriptApiPay: InitGetJavascriptApiPay =
  weChatPayOptions => async options => {
    const {url, publicAppId, privateKey} = weChatPayOptions;

    if (!publicAppId) {
      throw new Error('Missing public app ID.');
    }

    const request = initRequest(weChatPayOptions);
    const {prepayId} = (await request({
      method: 'POST',
      url: `${url}/v3/pay/transactions/jsapi`,
      body: options,
      publicApp: true,
    })) as {prepayId: string};

    const prepay = Object.freeze({prepayId});
    const prepayString = Object.keys(prepay)
      .map(key => `${key}=${prepay[key as keyof typeof prepay]}`)
      .toString();

    const token = getJavascriptApiPayToken({
      appId: publicAppId,
      prepayString,
      privateKey,
      timestamp: `${Math.trunc(Date.now() / 1000)}`,
    });

    return {
      appId: publicAppId,
      signType: 'RSA',
      package: {prepayId: prepayString},
      ...token,
    };
  };
