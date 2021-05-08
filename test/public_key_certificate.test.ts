import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import {weChatPay} from '../src/we_chat_pay';

describe('test/publicKeyCertificate.test.ts', () => {
  it('should be the result of obtaining public key certificate', async () => {
    const pay = weChatPay({
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

    const result = await pay.getPublicKeyCertificate();

    assert(Array.isArray(result));
    assert(typeof result[0] === 'object');
    assert(typeof result[0].certificate === 'string');
  });
});
