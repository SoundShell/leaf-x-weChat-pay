import * as fetch from '@leaf-x/fetch';
import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import * as sinon from 'sinon';
import {weChatPay} from '../src/we_chat_pay';

describe('test/showPay.test.ts', () => {
  it('should be showing payments.', async () => {
    sinon.stub(fetch, 'fetch').resolves({
      status: 200,
      data: {
        amount: {
          currency: 'CNY',
          payer_currency: 'CNY',
          payer_total: 1,
          total: 1,
        },
        appid: 'wx3fb47680dc1a2e20',
        attach: '',
        bank_type: 'OTHERS',
        mchid: '1565407881',
        out_trade_no: '49180619299012608',
        payer: {openid: 'ojRIYxPNI8lSTa_GUR_IlA2LNQFw'},
        promotion_detail: [],
        success_time: '2021-01-14T17:06:21+08:00',
        trade_state: 'SUCCESS',
        trade_state_desc: '支付成功',
        trade_type: 'APP',
        transaction_id: '4200000803202101145259110305',
      },
      headers: {
        'cache-control': 'no-cache, must-revalidate',
        connection: 'close',
        'content-language': 'zh-CN',
        'content-length': '436',
        'content-type': 'application/json; charset=utf-8',
        date: 'Wed, 12 May 2021 14:02:37 GMT',
        'request-id': '08FDBFEF840610DE0518F3B7C05520D10828E18B04-0',
        server: 'nginx',
        'wechatpay-nonce': '3b490bc67358063086aeb042621dc671',
        'wechatpay-serial': '75CCB679260E5EE60FEBBF314237C746DC85798A',
        'wechatpay-signature':
          'Aht+kpzCl8lDzqWgsj+qTGxqItTI6iz6GN9Jz5CW/0fSVKr5GsXah+A4adYkjhcgy6PWRisJVseEDV2mBban1UPV37QFIM2lN5ROyhQJJjT9IxaRyv/KYspimd7XfjjDgVyXLpKwqJkOc3I6OkZvuHQv05NlyxWpIR8ajQoW6QCHi9vSG+Zyg12DOryXbZkO1yZWBq6nKIVwXKH3MXSCN6iq391/GEoo23JrANg7HV82ofAA8DOPOJvxfaQB/6UFxLcdXmDR357tqaUZYGdg+af8QWSfc++rGQkVaGRVMqlHzZCqQtjwaY54Ql8PQ+r4UAjH8QGWJcyGNfOARu6xVA==',
        'wechatpay-timestamp': '1620828157',
        'x-content-type-options': 'nosniff',
      },
      statusText: '',
      url: '',
    });

    const pay = weChatPay({
      appId: 'wx3fb47680dc1a2e20',
      merchantId: '1565407881',
      merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
      serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/private_key.pem'),
        'ascii'
      ),
      publicCertificateDir: path.join(
        __dirname,
        '../public/certificate/we_chat'
      ),
    });

    await pay
      .showPay({
        transactionId: '4200000803202101145259110305',
      })
      .then(result => {
        assert(typeof result === 'object');
        assert(result.transactionId === '4200000803202101145259110305');
      });

    await pay
      .showPay({
        outTradeNo: '49180619299012608',
      })
      .then(result => {
        assert(typeof result === 'object');
        assert(result.outTradeNo === '49180619299012608');
      });

    sinon.restore();
  });
});
