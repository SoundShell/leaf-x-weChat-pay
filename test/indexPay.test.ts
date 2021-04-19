import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'
import { weChatPay } from '../src/weChatPay'

describe('test/indexPay.test.ts', () => {
  it('Should be the result of indexed payment.', async () => {
    const pay = weChatPay({
      appId: 'wx3fb47680dc1a2e20',
      merchantId: '1565407881',
      merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
      serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/privateKey.pem'),
        'ascii'
      ),
      publicCertificateDir: path.join(__dirname, '../public/certificate/weChat')
    })()

    const transactionResult = await pay.indexPay({
      transactionId: '4200000803202101145259110305'
    })

    const outTradeNoResult = await pay.indexPay({
      outTradeNo: '49180619299012608'
    })

    assert(typeof transactionResult === 'object')
    assert(typeof outTradeNoResult === 'object')
  })
})
