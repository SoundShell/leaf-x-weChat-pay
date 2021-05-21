import * as fetch from '@leaf-x/fetch';
import * as assert from 'assert';
import * as fs from 'fs';
import * as moment from 'moment';
import * as path from 'path';
import * as sinon from 'sinon';
import {weChatPay} from '../src/we_chat_pay';

describe('test/html5Pay.test.ts', () => {
  it('should be HTML5 payment', async () => {
    sinon.stub(fetch, 'fetch').resolves({
      status: 200,
      data: {
        h5_url:
          'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx122135328396116a2df82f5fe960c10000&package=3225760880',
      },
      headers: {
        'cache-control': 'no-cache, must-revalidate',
        connection: 'close',
        'content-language': 'zh-CN',
        'content-length': '131',
        'content-type': 'application/json; charset=utf-8',
        date: 'Wed, 12 May 2021 13:35:32 GMT',
        'request-id': '08A4B3EF840610CD0518EEAFB74C20C35828BDFC04-0',
        server: 'nginx',
        'wechatpay-nonce': 'c9ceea67ceb12ac076f71d1ce0f162be',
        'wechatpay-serial': '75CCB679260E5EE60FEBBF314237C746DC85798A',
        'wechatpay-signature':
          'dM3EItOZ1LZmCrTAsVlPSV69xKSJshnxInNhpfgmPJyQRZPfUhv94+XCYFPvLqr/mf4zkJILBB2cEqG7/GNcZliU4//CJCEgl695+LfzuY+7w8z3CiaH0xdEe8JCIc8k3mJBGV9MrKIXbNrlcXse8mGQgByH9HvKJ9brAFx04fz5JNTV0T9aTFFL/GL7L8RyuqSIw7L9DIVrf4ghC7M5TIHuiFKLBQ6Xv0FZ5RpiwSsix4tjlRc/0MbFa2AYC3T4OACPVH1iaCqpGP/3ieBjyOW6CAEUX8kjrvumVdMuKjT6Fp7E7qJCZgtzuewd/wzpdZcbUalEjEkMB4F0jhDw3A==',
        'wechatpay-timestamp': '1620826532',
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
      .getHtml5Pay({
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
          h5Info: {
            type: 'Wap',
          },
        },
      })
      .then(result => {
        sinon.restore();

        assert(typeof result === 'object');
        assert(
          result.url ===
            'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx122135328396116a2df82f5fe960c10000&package=3225760880'
        );
      });
  });
});
