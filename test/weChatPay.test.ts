/*
 * @Author: sound shell
 * @Date: 2021-01-16 18:13:24
 * @Last Modified by: sound shell
 * @Last Modified time: 2021-01-19 00:08:41
 */

'use strict'

import * as assert from 'assert'
// import * as sinon from 'sinon'
import * as fs from 'fs'
import * as path from 'path'
import WeChatPay from '../src/lib/weChatPay'
import * as moment from 'moment'
// import axios from 'axios'

describe('test/fc.test.ts', () => {
  //   it('Should be the result of WeChatPay.weChatPublicKeyCert', async () => {
  //     const weChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       )
  //     })

  //     sinon.stub(weChatPay, 'request').resolves({
  //       data: [
  //         {
  //           effectiveTime: '2018-01-22T09:12:43.083Z',
  //           encryptCertificate: 'test',
  //           expireTime: '2018-01-22T09:12:43.083Z',
  //           serialNo: '123'
  //         }
  //       ]
  //     })

  //     sinon.stub(weChatPay, 'decrypt').returns('anNydHRndA==')

  //     const result = await weChatPay.weChatPublicKeyCert()

  //     assert(Array.isArray(result))
  //     assert(typeof result[0] === 'object')
  //     assert(typeof result[0].cert === 'string')
  //   })

  //   it('Should be the result of WeChatPay.jsApiPay', async () => {
  //     const weChatPay = new WeChatPay({
  //       publicAppId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       )
  //     })

  //     sinon.stub(weChatPay, 'request').resolves({ prepayId: '123' })
  //     sinon.stub(weChatPay, 'jsApiToken').returns({
  //       timestamp: '1610806979',
  //       nonceStr: 'anNydHRndA==',
  //       sign: 'dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM='
  //     })

  //     const result = await weChatPay.jsApiPay({
  //       description: '测试',
  //       outTradeNo: `${moment
  //         .utc()
  //         .subtract(50, 'year')
  //         .format('YYYYMMDDHHmmss')}${moment.utc().valueOf()}`,
  //       timeExpire: moment.utc().add(1, 'minute').format(),
  //       notifyUrl: 'https://dev.api.thallonet.com/v3/weChatPayNotifies',
  //       amount: {
  //         total: 1,
  //         currency: 'CNY'
  //       },
  //       payer: {
  //         openid: 'ojRIYxPNI8lSTa_GUR_IlA2LNQFw'
  //       }
  //     })

  //     assert(typeof result === 'object')
  //     assert(result.appId === 'wx3fb47680dc1a2e20')
  //     assert(result.signType === 'RSA')
  //     assert(typeof result.package === 'object')
  //     assert(typeof result.package.prepayId === 'string')
  //     assert(result.nonceStr === 'anNydHRndA==')
  //     assert(result.timestamp === '1610806979')
  //     assert(result.sign === 'dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM=')
  //   })

  //   it('Should be the result of WeChatPay.h5Pay', async () => {
  //     const weChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       )
  //     })

  //     sinon
  //       .stub(weChatPay, 'request')
  //       .resolves({ h5Url: 'https://dev.api.thallonet.com/v3/weChatPayNotifies' })

  //     const result = await weChatPay.h5Pay({
  //       description: '测试',
  //       outTradeNo: `${moment
  //         .utc()
  //         .subtract(50, 'year')
  //         .format('YYYYMMDDHHmmss')}${moment.utc().valueOf()}`,
  //       timeExpire: moment.utc().add(1, 'minute').format(),
  //       notifyUrl: 'https://dev.api.thallonet.com/v3/weChatPayNotifies',
  //       amount: {
  //         total: 1,
  //         currency: 'CNY'
  //       },
  //       sceneInfo: {
  //         payerClientIp: '127.0.0.0',
  //         h5Info: {
  //           type: 'Wap',
  //           appName: '塔罗科技',
  //           appUrl: 'https://console.thallonet.com/'
  //         }
  //       }
  //     })

  //     assert(typeof result === 'object')
  //     assert(typeof result.url === 'string')
  //   })

  //   it('Should be the result of WeChatPay.queryPay', async () => {
  //     const weChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       )
  //     })

  //     sinon.stub(weChatPay, 'request').resolves({ appid: 'wx3fb47680dc1a2e20' })

  //     const transactionResult = await weChatPay.queryPay({
  //       transactionId: '4200000803202101145259110305'
  //     })

  //     const outTradeNoResult = await weChatPay.queryPay({
  //       outTradeNo: '49180619299012608'
  //     })

  //     assert(typeof transactionResult === 'object')
  //     assert(typeof outTradeNoResult === 'object')
  //   })

  //   it('Should be the result of WeChatPay.validateResponseSign', async () => {
  //     const weChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       ),
  //       weChatPayPublicCertDir: path.join(__dirname, '../public/cert')
  //     })

  //     sinon.stub(weChatPay, 'validateSign').returns(true)

  //     const result = weChatPay.validateResponseSign({
  //       serialNo: '75ccb679260e5ee60febbf314237c746dc85798a'.toUpperCase(),
  //       nonceStr: 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ',
  //       timestamp: '1610615188',
  //       body: {
  //         id: 'b107bbad-8d05-5c20-8c6a-ccef467722a0',
  //         create_time: '2021-01-14T17:06:21+08:00',
  //         resource_type: 'encrypt-resource',
  //         event_type: 'TRANSACTION.SUCCESS',
  //         summary: '支付成功',
  //         resource: {
  //           original_type: 'transaction',
  //           algorithm: 'AEAD_AES_256_GCM',
  //           ciphertext:
  //             'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
  //           associated_data: 'transaction',
  //           nonce: 'OvMzjQVI0urP'
  //         }
  //       },
  //       sign:
  //         'tIHr+yf2DY/XB8P/93NK0OV97afvsCAEJXCUSeeDEScou1MR0P8dvtYWsc2VXg+fu2pwEZ2wy2vsDDANHyUbiO4ITUTPPIjVexUDGjIEf3/powkrPL/ZbLDFJCuGeGRYN+wxy4CG7BTDN15eNzzJI0YDWbHx43wYkNsaTqRrVDn4blgWEvwlRu7wbhWN4PzZ7AcCtBAA2S28fnoMlxZaV6hy01sxzBAWzjOTC5sSW50/i092huprvojQlXvK7RdxRo2+zKiFra9G0HPizsvbwZjfNBFyFYJvL6GVCNAqmll0LaZWu70lOwePH7geXhfbLLR2+gIWEOCBWsilwAYp4Q=='
  //     })

  //     assert(result)

  //     try {
  //       weChatPay.validateResponseSign({
  //         serialNo: '75ccb679260e5ee60febbf314237c746dc8'.toUpperCase(),
  //         nonceStr: 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ',
  //         timestamp: '1610615188',
  //         body: {},
  //         sign:
  //           'tIHr+yf2DY/XB8P/93NK0OV97afvsCAEJXCUSeeDEScou1MR0P8dvtYWsc2VXg+fu2pwEZ2wy2vsDDANHyUbiO4ITUTPPIjVexUDGjIEf3/powkrPL/ZbLDFJCuGeGRYN+wxy4CG7BTDN15eNzzJI0YDWbHx43wYkNsaTqRrVDn4blgWEvwlRu7wbhWN4PzZ7AcCtBAA2S28fnoMlxZaV6hy01sxzBAWzjOTC5sSW50/i092huprvojQlXvK7RdxRo2+zKiFra9G0HPizsvbwZjfNBFyFYJvL6GVCNAqmll0LaZWu70lOwePH7geXhfbLLR2+gIWEOCBWsilwAYp4Q=='
  //       })
  //     } catch (error) {
  //       assert(typeof error === 'object')
  //     }

  //     const nullCertWeChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       )
  //     })

  //     try {
  //       nullCertWeChatPay.validateResponseSign({
  //         serialNo: '',
  //         nonceStr: 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ',
  //         timestamp: '1610615188',
  //         body: {},
  //         sign: 'tIHr+yf2DY/XB8P/93NK0OV9='
  //       })
  //     } catch (error) {
  //       assert(typeof error === 'object')
  //     }
  //   })

  //   it('Should be the result of WeChatPay.validateNotifySign', async () => {
  //     const weChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       ),
  //       weChatPayPublicCertDir: path.join(__dirname, '../public/cert')
  //     })

  //     sinon.stub(weChatPay, 'validateSign').returns(true)

  //     const result = weChatPay.validateNotifySign({
  //       serialNo: '75ccb679260e5ee60febbf314237c746dc85798a'.toUpperCase(),
  //       nonceStr: 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ',
  //       timestamp: '1610615188',
  //       body: {
  //         id: 'b107bbad-8d05-5c20-8c6a-ccef467722a0',
  //         create_time: '2021-01-14T17:06:21+08:00',
  //         resource_type: 'encrypt-resource',
  //         event_type: 'TRANSACTION.SUCCESS',
  //         summary: '支付成功',
  //         resource: {
  //           original_type: 'transaction',
  //           algorithm: 'AEAD_AES_256_GCM',
  //           ciphertext:
  //             'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
  //           associated_data: 'transaction',
  //           nonce: 'OvMzjQVI0urP'
  //         }
  //       },
  //       sign:
  //         'tIHr+yf2DY/XB8P/93NK0OV97afvsCAEJXCUSeeDEScou1MR0P8dvtYWsc2VXg+fu2pwEZ2wy2vsDDANHyUbiO4ITUTPPIjVexUDGjIEf3/powkrPL/ZbLDFJCuGeGRYN+wxy4CG7BTDN15eNzzJI0YDWbHx43wYkNsaTqRrVDn4blgWEvwlRu7wbhWN4PzZ7AcCtBAA2S28fnoMlxZaV6hy01sxzBAWzjOTC5sSW50/i092huprvojQlXvK7RdxRo2+zKiFra9G0HPizsvbwZjfNBFyFYJvL6GVCNAqmll0LaZWu70lOwePH7geXhfbLLR2+gIWEOCBWsilwAYp4Q=='
  //     })

  //     assert(result)
  //   })

  //   it('Should be the result of WeChatPay.decrypt', async () => {
  //     const weChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       )
  //     })

  //     const result = weChatPay.decrypt({
  //       originalType: 'transaction',
  //       algorithm: 'AEAD_AES_256_GCM',
  //       ciphertext:
  //         'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
  //       associatedData: 'transaction',
  //       nonce: 'OvMzjQVI0urP',
  //       formatJson: true
  //     })

  //     assert(typeof result === 'object')

  //     const strResult = weChatPay.decrypt({
  //       originalType: 'transaction',
  //       algorithm: 'AEAD_AES_256_GCM',
  //       ciphertext:
  //         'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
  //       associatedData: 'transaction',
  //       nonce: 'OvMzjQVI0urP'
  //     })

  //     assert(typeof strResult === 'string')

  //     try {
  //       weChatPay.decrypt({
  //         originalType: 'transaction',
  //         algorithm: 'AEAD_AES_256_GCM',
  //         ciphertext:
  //           'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
  //         nonce: 'OvMzjQVI0urP'
  //       })
  //     } catch (error) {
  //       assert(typeof error === 'object')
  //     }

  //     try {
  //       weChatPay.decrypt({
  //         originalType: 'transaction',
  //         algorithm: 'AEAD_AES_256_GCM',
  //         ciphertext:
  //           'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
  //         nonce: 'OvMzjQVI0urP'
  //       })
  //     } catch (error) {
  //       assert(typeof error === 'object')
  //     }

  //     const nullMerchantKeyWeChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       )
  //     })

  //     try {
  //       nullMerchantKeyWeChatPay.decrypt({
  //         originalType: 'transaction',
  //         algorithm: 'AEAD_AES_256_GCM',
  //         ciphertext:
  //           'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
  //         nonce: 'OvMzjQVI0urP'
  //       })
  //     } catch (error) {
  //       assert(typeof error === 'object')
  //     }
  //   })

  //   it('Should be the result of WeChatPay.request', async () => {
  //     const weChatPay = new WeChatPay({
  //       appId: 'wx3fb47680dc1a2e20',
  //       merchantId: '1565407881',
  //       serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
  //       privateKey: fs.readFileSync(
  //         path.join(__dirname, '../public/privateKey.pem'),
  //         'ascii'
  //       )
  //     })

  //     sinon.stub(weChatPay, 'requestToken').returns('123')
  //     sinon.stub(weChatPay, 'validateResponseSign').returns(true)
  //     sinon.stub(axios, 'request').resolves({
  //       status: 200,
  //       data: { message: 'ok', order_id: 'test' },
  //       headers: {}
  //     })

  //     const result = await weChatPay
  //       .request({
  //         method: 'POST',
  //         url: 'https://api.mch.weixin.qq.com',
  //         body: { test: 'test' },
  //         headers: {}
  //       })
  //       .then((result) => result)

  //     assert(typeof result === 'object')
  //     assert((result as Record<string, unknown>).orderId === 'test')

  //     const nullBodyResult = await weChatPay
  //       .request({
  //         method: 'POST',
  //         url: 'https://api.mch.weixin.qq.com',
  //         body: '',
  //         headers: {}
  //       })
  //       .then((result) => result)

  //     assert(typeof nullBodyResult === 'object')

  //     sinon.restore()
  //     sinon.stub(weChatPay, 'requestToken').returns('123')
  //     sinon.stub(weChatPay, 'validateResponseSign').returns(true)
  //     sinon.stub(axios, 'request').rejects({
  //       response: {
  //         status: 500,
  //         message: 'Internal Server Error',
  //         data: {
  //           message: 'Function timed out after 5 seconds'
  //         },
  //         headers: { 'x-fc-request-id': 'e86c36af-9144-4c19-addb-fa12837ec819' }
  //       }
  //     })

  //     const errorResult = await weChatPay
  //       .request({
  //         url: 'https://api.mch.weixin.qq.com',
  //         body: { test: 'test' }
  //       })
  //       .catch((err) => err)

  //     assert(typeof errorResult === 'object')

  //     sinon.restore()
  //     sinon.stub(weChatPay, 'requestToken').returns('123')
  //     sinon.stub(weChatPay, 'validateResponseSign').returns(false)
  //     sinon.stub(axios, 'request').resolves({
  //       status: 200,
  //       data: { message: 'ok', order_id: 'test' },
  //       headers: {}
  //     })

  //     const validateResponseSignError = await weChatPay
  //       .request({
  //         url: 'https://api.mch.weixin.qq.com',
  //         body: { test: 'test' }
  //       })
  //       .catch((err) => err)

  //     assert(typeof validateResponseSignError === 'object')
  //   })

  it('Should be the result of WeChatPay.appPay', async () => {
    const weChatPay = new WeChatPay({
      appId: 'wx3fb47680dc1a2e20',
      merchantId: '1565407881',
      merchantKey: '53a8a26e2db752cf2c69304f222d26d5',
      serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/privateKey.pem'),
        'ascii'
      ),
      weChatPayPublicCertDir: path.join(__dirname, '../public/cert')
    })

    // sinon.stub(weChatPay, 'request').resolves({ prepayId: '123' })
    // sinon.stub(weChatPay, 'appToken').returns({
    //   timestamp: '1610806979',
    //   nonceStr: 'anNydHRndA==',
    //   sign: 'dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM='
    // })

    const result = await weChatPay.appPay({
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

    assert(typeof result === 'object')
    assert(result.appId === 'wx3fb47680dc1a2e20')
    assert(result.partnerId === '1565407881')
    assert(result.package === 'Sign=WXPay')
    assert(result.nonceStr === 'anNydHRndA==')
    assert(result.timestamp === '1610806979')
    assert(result.sign === 'dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM=')
  })
})
