import * as assert from 'assert'
import * as fs from 'fs'
import * as moment from 'moment'
import * as path from 'path'
import { GetAppPayResult } from 'src/interface/appPay.interface'
import { initRequest } from '../src/request'

describe('test/request.test.ts', () => {
  it('Should be the result of a request.', async () => {
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
      publicCertificateDir: path.join(__dirname, '../public/certificate/weChat')
    })

    const result = (await request({
      method: 'POST',
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/app',
      body: {
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
      }
    })) as GetAppPayResult

    assert(typeof result === 'object')
    assert(result.prepayId)
  })
})
