import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'
import {
  getAppToken,
  getJavascriptApiToken,
  getRequestToken
} from '../src/token'
import { weChatPay } from '../src/weChatPay'

describe('test/token.test.ts', () => {
  it('Should be the result of getting the request token.', async () => {
    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = getRequestToken({
      method: 'POST',
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/privateKey.pem'),
        'ascii'
      ),
      merchantId: 'ZmZmc2Rmcw==',
      serialNo: 'c2Rmc2FkZ2hoampoanNkYWZzZGFmYXNk',
      timestamp
    })

    assert(typeof result === 'string')
  })

  it('Should be the result of a Javascript API token.', async () => {
    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = getJavascriptApiToken({
      appId: 'POST',
      prepayString: 'prepay_id=86739283838457',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/privateKey.pem'),
        'ascii'
      ),
      timestamp
    })

    assert(typeof result === 'object')
  })

  it('Should be the result of applying a token.', async () => {
    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = getAppToken({
      appId: 'dnZzZGZ3MTIzMjFkZmZnZw==',
      prepayId: '556621223334',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/privateKey.pem'),
        'ascii'
      ),
      timestamp
    })

    assert(typeof result === 'object')
  })

  it('Should be the result of validate the signature.', async () => {
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

    const result = pay.validateResponseSign({
      serialNo: '75ccb679260e5ee60febbf314237c746dc85798a'.toUpperCase(),
      nonceString: 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ',
      timestamp: '1610615188',
      body: {
        id: 'b107bbad-8d05-5c20-8c6a-ccef467722a0',
        createTime: '2021-01-14T17:06:21+08:00',
        resourceType: 'encrypt-resource',
        eventType: 'TRANSACTION.SUCCESS',
        summary: '支付成功',
        resource: {
          originalType: 'transaction',
          algorithm: 'AEAD_AES_256_GCM',
          ciphertext:
            'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
          associatedData: 'transaction',
          nonce: 'OvMzjQVI0urP'
        }
      },
      sign:
        'tIHr+yf2DY/XB8P/93NK0OV97afvsCAEJXCUSeeDEScou1MR0P8dvtYWsc2VXg+fu2pwEZ2wy2vsDDANHyUbiO4ITUTPPIjVexUDGjIEf3/powkrPL/ZbLDFJCuGeGRYN+wxy4CG7BTDN15eNzzJI0YDWbHx43wYkNsaTqRrVDn4blgWEvwlRu7wbhWN4PzZ7AcCtBAA2S28fnoMlxZaV6hy01sxzBAWzjOTC5sSW50/i092huprvojQlXvK7RdxRo2+zKiFra9G0HPizsvbwZjfNBFyFYJvL6GVCNAqmll0LaZWu70lOwePH7geXhfbLLR2+gIWEOCBWsilwAYp4Q=='
    })

    assert(result)
  })
})