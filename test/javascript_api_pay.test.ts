import * as fetch from '@leaf-x/fetch';
import * as assert from 'assert';
import * as fs from 'fs';
import * as moment from 'moment';
import * as path from 'path';
import * as sinon from 'sinon';
import {weChatPay} from '../src/we_chat_pay';

describe('test/javascriptApiPay.test.ts', () => {
  it('should be the result of obtaining a payment order', async () => {
    sinon.stub(fetch, 'fetch').resolves({
      status: 200,
      data: {prepay_id: 'wx12213852460930663e0b39c1b8f6880000'},
      headers: {
        'cache-control': 'no-cache, must-revalidate',
        connection: 'close',
        'content-language': 'zh-CN',
        'content-length': '52',
        'content-type': 'application/json; charset=utf-8',
        date: 'Wed, 12 May 2021 13:38:52 GMT',
        'request-id': '08ECB4EF840610F50218ABADC05520BC2A28E67E-0',
        server: 'nginx',
        'wechatpay-nonce': '9a4c412eaf3947fcbdc16130cd65a7f4',
        'wechatpay-serial': '75CCB679260E5EE60FEBBF314237C746DC85798A',
        'wechatpay-signature':
          'PBRsiWemWGeJk0ScV8+poeu+TBCh6leJ2j0R0eKL8DY9BQOlT8wmfG5DRn7U+mxivspO2FB+T6YN1hPJeFEbegU5JQ0JYaYVBhqMBuduTyvanvLS1tA5+IWEbYPDzb3cRWCOR1sI6kQCD9uuyL3fPzXbhGek62Glzm9H2Mbzo5JXRE0jAGzs6Y/oxQriwFVUwUCGS9OthWfqYzmurG9A3FYvlZuiIISBQBSM0oSGLngKV1+cYTHm+5IVO/r3kuPMYLwFMDtVVMt3AIpoKo5J6bNOkFfcLvdhwmU5FvTI+2nsFjML5Af9qvHZC4UXJu+700UVK6ck3PB0r4e7biKaHQ==',
        'wechatpay-timestamp': '1620826732',
        'x-content-type-options': 'nosniff',
      },
      statusText: '',
      url: '',
    });

    const pay = weChatPay({
      publicAppId: 'wx3fb47680dc1a2e20',
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
      .getJavascriptApiPay({
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
        payer: {
          openid: 'ojRIYxPNI8lSTa_GUR_IlA2LNQFw',
        },
      })
      .then(result => {
        sinon.restore();

        assert(typeof result === 'object');
        assert(result.appId === 'wx3fb47680dc1a2e20');
        assert(result.signType === 'RSA');
        assert(typeof result.package === 'object');
        assert(
          result.package.prepayId ===
            'prepayId=wx12213852460930663e0b39c1b8f6880000'
        );
      });
  });

  it('should be the result of a missing WeChat public ID', async () => {
    const pay = weChatPay({
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
      .getJavascriptApiPay({
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
        payer: {
          openid: 'ojRIYxPNI8lSTa_GUR_IlA2LNQFw',
        },
      })
      .catch(error => assert(error.message === 'Missing public app ID.'));
  });
});
