import {fetch} from '@leaf-x/fetch';
import * as camelcaseKeys from 'camelcase-keys';
import * as snakeCaseKeys from 'snakecase-keys';
import {
  InitRequest,
  InitValidateResponse,
} from '../src/interface/request.interface';
import {getRequestToken, initValidateResponseSign} from './token';

const initValidateResponse: InitValidateResponse =
  publicCertificateDir =>
  ({data, headers}) => {
    const result = initValidateResponseSign(publicCertificateDir)({
      nonceStr: headers['wechatpay-nonce'] as string,
      timestamp: headers['wechatpay-timestamp'] as string,
      sign: headers['wechatpay-signature'] as string,
      serialNo: headers['wechatpay-serial'] as string,
      body: data as Record<string, unknown>,
    });

    if (!result) {
      throw Object.assign(new Error('Response signature error.'), {
        status: 403,
      });
    }

    return camelcaseKeys(data as Record<string, unknown>, {deep: true});
  };

export const initRequest: InitRequest =
  ({
    appId,
    publicAppId,
    privateKey,
    merchantId,
    serialNo,
    schema,
    publicCertificateDir,
    timeout = 3000,
  }) =>
  async ({method = 'GET', url, body, headers, publicApp = false}) => {
    const json = typeof body === 'object' && body !== null;
    const jsonData = body && json;

    if (jsonData) {
      Object.assign(body, {
        appid: publicApp ? publicAppId : appId,
        mchid: merchantId,
      });
    }

    const data = jsonData
      ? JSON.stringify(
          snakeCaseKeys(body as Record<string, unknown>, {deep: true})
        )
      : undefined;

    const token = getRequestToken({
      method,
      url,
      body: data,
      privateKey,
      merchantId,
      serialNo,
      timestamp: `${Math.trunc(Date.now() / 1000)}`,
    });

    return fetch(url, {
      method,
      body: data,
      headers: {
        ...headers,
        Authorization: `${schema} ${token}`,
        'user-agent': `Node.js(${process.version}) OS(${process.platform}/${process.arch})`,
      },
      timeout,
    }).then(initValidateResponse(publicCertificateDir));
  };
