import * as assert from 'assert'
import * as fs from 'fs'
import * as moment from 'moment'
import * as path from 'path'
import { weChatPay } from '../src/weChatPay'

describe('test/javascriptApiPay.test.ts', () => {
  it('Should be the result of the Javascript API payment.', async () => {
    const pay = weChatPay({
      publicAppId: 'wx3fb47680dc1a2e20',
      merchantId: '1565407881',
      merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
      serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/privateKey.pem'),
        'ascii'
      ),
      publicCertificateDir: path.join(__dirname, '../public/certificate/weChat')
    })()

    const result = await pay.getJavascriptApiPay({
      description: '测试',
      outTradeNo: `${moment
        .utc()
        .subtract(50, 'year')
        .format('YYYYMMDDHHmmss')}${moment.utc().valueOf()}`,
      timeExpire: moment.utc().add(1, 'minute').format(),
      notifyUrl: 'https://dev.api.thallonet.com/v3/weChatPayNotifies',
      amount: {
        total: 1,
        currency: 'CNY'
      },
      payer: {
        openid: 'ojRIYxPNI8lSTa_GUR_IlA2LNQFw'
      }
    })

    assert(typeof result === 'object')
    assert(result.appId === 'wx3fb47680dc1a2e20')
    assert(result.signType === 'RSA')
    assert(typeof result.package === 'object')
    assert(typeof result.package.prepayId === 'string')
  })
})