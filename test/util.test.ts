import * as assert from 'assert'
import * as fs from 'fs'
import * as moment from 'moment'
import * as path from 'path'
import { weChatPay } from '../src/weChatPay'

describe('test/status.test.ts', () => {
  it('Should be the correct response status code result.', async () => {
    const pay = weChatPay({
      appId: 'wx3fb47680dc1a2e20',
      merchantId: '1565407881',
      merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
      serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/privateKey.pem'),
        'ascii'
      ),
      publicCertDir: path.join(__dirname, '../public/cert')
    })()

    // sinon.stub(weChatPay, 'request').resolves({ prepayId: '123' })
    // sinon.stub(weChatPay, 'appToken').returns({
    //   timestamp: '1610806979',
    //   nonceStr: 'anNydHRndA==',
    //   sign: 'dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM='
    // })

    const result = await pay
      .getAppPay({
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
        sceneInfo: {
          payerClientIp: '127.0.0.0'
        }
      })
      .catch((err) => console.info(err))

    console.info(result)

    assert(typeof result === 'object')
    assert(result.appId === 'wx3fb47680dc1a2e20')
    assert(result.partnerId === '1565407881')
    assert(result.package === 'Sign=WXPay')
    // assert(result.nonceStr === 'anNydHRndA==')
    // assert(result.timestamp === '1610806979')
    // assert(result.sign === 'dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM=')
  })
})
