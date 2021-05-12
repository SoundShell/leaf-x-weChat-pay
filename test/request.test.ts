import * as fetch from '@leaf-x/fetch';
import * as assert from 'assert';
import * as fs from 'fs';
import * as moment from 'moment';
import * as path from 'path';
import * as sinon from 'sinon';
import {GetAppPayResult} from '../src';
import {initRequest} from '../src/request';

describe('test/request.test.ts', () => {
  it('should be the result of a request', async () => {
    sinon.stub(fetch, 'fetch').resolves({
      status: 200,
      data: {prepay_id: 'wx12212924656439279c3662866a9f140000'},
      headers: {
        'cache-control': 'no-cache, must-revalidate',
        connection: 'close',
        'content-language': 'zh-CN',
        'content-length': '52',
        'content-type': 'application/json; charset=utf-8',
        date: 'Wed, 12 May 2021 13:29:24 GMT',
        'request-id': '08B4B0EF840610B60418C1ADB74C20B33F28A0EC04-0',
        server: 'nginx',
        'wechatpay-nonce': '740be5b37f2c58d5adcad45739e143e7',
        'wechatpay-serial': '75CCB679260E5EE60FEBBF314237C746DC85798A',
        'wechatpay-signature':
          'gvpsDYNkV6x5k/u2FlaYm6KRuHUKgAXRMBIRrVueQvb9exjzicBcciRlT77jCNfY8RPKukxsDHejJQusXi09eKpTEHxUeFlzYgXOjfOMVLyoUXEWZOBSzLHNPBBiLcP1XM0li7145F016x41FfG5z14cIg9FcHJuZu0JSvxWyYE+ZykrPifOGEIV+BSxQhW94s0rUFHVlS0arxF5lSQOzEmYH9zY/jwqc6MDbnRlgjDvLvsLa3Wtzx4VUsEKEF6tJzdf5+AyPqW3ZZCIb8ru3feiDY4oVnPl3KFezSq0pVGEoxmhh0hD3cpbtFwT9DvCV8oUzUt6YJa5PGsgBuFjqg==',
        'wechatpay-timestamp': '1620826164',
        'x-content-type-options': 'nosniff',
      },
      statusText: '',
      url: '',
    });

    const request = initRequest({
      schema: 'WECHATPAY2-SHA256-RSA2048',
      appId: 'wx3fb47680dc1a2e20',
      merchantId: '1565407881',
      merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
      serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/privateKey.pem'),
        'ascii'
      ),
      publicCertificateDir: path.join(
        __dirname,
        '../public/certificate/weChat'
      ),
    });

    await request({
      method: 'POST',
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/app',
      body: {
        description: 'test',
        outTradeNo: `${moment
          .utc()
          .subtract(50, 'year')
          .format('YYYYMMDDHHmmss')}${moment.utc().valueOf()}`,
        timeExpire: moment.utc().add(1, 'minute').format(),
        notifyUrl: 'https://dev.api.thallonet.com/v3/weChatPayNotifies',
        amount: {
          total: 1,
          currency: 'CNY',
        },
        sceneInfo: {
          payerClientIp: '127.0.0.0',
        },
      },
    }).then(result => {
      sinon.restore();

      assert(typeof result === 'object');
      assert(
        (result as GetAppPayResult).prepayId ===
          'wx12212924656439279c3662866a9f140000'
      );
    });
  });

  it('should be the result of a response signature error.', async () => {
    sinon.stub(fetch, 'fetch').resolves({
      status: 200,
      data: {prepay_id: 'wx12212924656439279c3662866a9f1'},
      headers: {
        'cache-control': 'no-cache, must-revalidate',
        connection: 'close',
        'content-language': 'zh-CN',
        'content-length': '52',
        'content-type': 'application/json; charset=utf-8',
        date: 'Wed, 12 May 2021 13:29:24 GMT',
        'request-id': '08B4B0EF840610B60418C1ADB74C20B33F28A0EC04-0',
        server: 'nginx',
        'wechatpay-nonce': '740be5b37f2c58d5adcad45739e143e7',
        'wechatpay-serial': '75CCB679260E5EE60FEBBF314237C746DC85798A',
        'wechatpay-signature':
          'gvpsDYNkV6x5k/u2FlaYm6KRuHUKgAXRMBIRrVueQvb9exjzicBcciRlT77jCNfY8RPKukxsDHejJQusXi09eKpTEHxUeFlzYgXOjfOMVLyoUXEWZOBSzLHNPBBiLcP1XM0li7145F016x41FfG5z14cIg9FcHJuZu0JSvxWyYE+ZykrPifOGEIV+BSxQhW94s0rUFHVlS0arxF5lSQOzEmYH9zY/jwqc6MDbnRlgjDvLvsLa3Wtzx4VUsEKEF6tJzdf5+AyPqW3ZZCIb8ru3feiDY4oVnPl3KFezSq0pVGEoxmhh0hD3cpbtFwT9DvCV8oUzUt6YJa5PGsgBuFjqg==',
        'wechatpay-timestamp': '1620826164',
        'x-content-type-options': 'nosniff',
      },
      statusText: '',
      url: '',
    });

    const request = initRequest({
      schema: 'WECHATPAY2-SHA256-RSA2048',
      appId: 'wx3fb47680dc1a2e20',
      merchantId: '1565407881',
      merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
      serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/privateKey.pem'),
        'ascii'
      ),
      publicCertificateDir: path.join(
        __dirname,
        '../public/certificate/weChat'
      ),
    });

    await request({
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/app',
      body: {
        description: 'test',
        outTradeNo: `${moment
          .utc()
          .subtract(50, 'year')
          .format('YYYYMMDDHHmmss')}${moment.utc().valueOf()}`,
        timeExpire: moment.utc().add(1, 'minute').format(),
        notifyUrl: 'https://dev.api.thallonet.com/v3/weChatPayNotifies',
        amount: {
          total: 1,
          currency: 'CNY',
        },
        sceneInfo: {
          payerClientIp: '127.0.0.0',
        },
      },
    }).catch(error => {
      sinon.restore();

      assert(error.message === 'Response signature error.');
    });
  });
});
