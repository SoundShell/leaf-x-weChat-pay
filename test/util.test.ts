/*
 * @Author: sound shell
 * @Date: 2021-01-16 18:13:24
 * @Last Modified by: sound shell
 * @Last Modified time: 2021-01-18 21:55:20
 */

'use strict'

import * as assert from 'assert'
import * as sinon from 'sinon'
import * as fs from 'fs'
import * as path from 'path'
import Util from '../src/lib/util'

describe('test/fc.test.ts', () => {
  it('Should be the result of Util.requestToken', async () => {
    const utils = new Util()

    sinon
      .stub(utils, 'generateNonceStr')
      .returns('ZHNmYXNkZnNkYWZhc2RmYXNkZmFzZA==')

    sinon.stub(utils, 'requestSignStr').returns('Y3NmYXNkZnM=')
    sinon.stub(utils, 'sign').returns('c2Rmc2FkZ2hoampoag==')

    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = utils.requestToken({
      method: 'POST',
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi',
      privateKey: 'dGVzdA==',
      merchantId: 'ZmZmc2Rmcw==',
      serialNo: 'c2Rmc2FkZ2hoampoanNkYWZzZGFmYXNk',
      timestamp
    })

    const expected = [
      'mchid="ZmZmc2Rmcw=="',
      'nonce_str="ZHNmYXNkZnNkYWZhc2RmYXNkZmFzZA=="',
      `timestamp="${timestamp}"`,
      'serial_no="c2Rmc2FkZ2hoampoanNkYWZzZGFmYXNk"',
      'signature="c2Rmc2FkZ2hoampoag=="'
    ].join(',')

    assert(typeof result === 'string')
    assert(result === expected)
  })

  it('Should be the result of Util.requestSignStr', async () => {
    const utils = new Util()
    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = utils.requestSignStr({
      method: 'POST',
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi',
      nonceStr: 'dGVzdA==',
      timestamp,
      body: { test: 'test' }
    })

    const expected = `${[
      'POST',
      '/v3/pay/transactions/jsapi',
      timestamp,
      'dGVzdA==',
      `${JSON.stringify({ test: 'test' })}`
    ].join('\n')}\n`

    assert(typeof result === 'string')
    assert(result === expected)

    const nullBodyResult = utils.requestSignStr({
      method: 'POST',
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi',
      nonceStr: 'dGVzdA==',
      timestamp,
      body: ''
    })

    const nullBodyExpected = `${[
      'POST',
      '/v3/pay/transactions/jsapi',
      timestamp,
      'dGVzdA==',
      ''
    ].join('\n')}\n`

    assert(nullBodyResult === nullBodyExpected)
  })

  it('Should be the result of Util.jsApiToken', async () => {
    const utils = new Util()

    sinon.stub(utils, 'generateNonceStr').returns('anNydHRndA==')
    sinon.stub(utils, 'jsApiSignStr').returns('dnZzZGZ3ZXI=')
    sinon.stub(utils, 'sign').returns('dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM=')

    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = utils.jsApiToken({
      appId: 'POST',
      prepayStr: 'prepay_id=86739283838457',
      privateKey: 'dGVzdA==',
      timestamp
    })

    assert(typeof result === 'object')
    assert(result.timestamp === timestamp)
    assert(result.nonceStr === 'anNydHRndA==')
    assert(result.sign === 'dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM=')
  })

  it('Should be the result of Util.jsApiSignStr', async () => {
    const utils = new Util()
    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = utils.jsApiSignStr({
      appId: 'dnZzZGZ3MTIzMjE=',
      timestamp: `${parseInt((Date.now() / 1000).toString())}`,
      nonceStr: 'dGVzdA==',
      prepayStr: 'prepay_id=86739283838457'
    })

    const expected = `${[
      'dnZzZGZ3MTIzMjE=',
      timestamp,
      'dGVzdA==',
      'prepay_id=86739283838457'
    ].join('\n')}\n`

    assert(typeof result === 'string')
    assert(result === expected)
  })

  it('Should be the result of Util.appToken', async () => {
    const utils = new Util()

    sinon.stub(utils, 'generateNonceStr').returns('anNydHRndA==')
    sinon.stub(utils, 'appSignStr').returns('dnZzZGZ3ZXI=')
    sinon.stub(utils, 'sign').returns('dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM=')

    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = utils.appToken({
      appId: 'dnZzZGZ3MTIzMjFkZmZnZw==',
      prepayId: '556621223334',
      privateKey: 'dGVzdA==',
      timestamp
    })

    assert(typeof result === 'object')
    assert(result.nonceStr === 'anNydHRndA==')
    assert(result.timestamp === timestamp)
    assert(result.sign === 'dnZzZGZ3ZXJnZ2F3MjM1dHNkZnNkZnM=')
  })

  it('Should be the result of Util.appSignStr', async () => {
    const utils = new Util()
    const timestamp = `${parseInt((Date.now() / 1000).toString())}`
    const result = utils.appSignStr({
      appId: 'dnZzZGZ3MTIzMjFkZmZnZ3NhZGFz',
      timestamp,
      nonceStr: 'dGVzdA==',
      prepayId: 'prepay_id=86739283838457'
    })

    const expected = `${[
      'dnZzZGZ3MTIzMjFkZmZnZ3NhZGFz',
      timestamp,
      'dGVzdA==',
      'prepay_id=86739283838457'
    ].join('\n')}\n`

    assert(typeof result === 'string')
    assert(result === expected)
  })

  it('Should be the result of Util.formatSecretKey', async () => {
    const utils = new Util()

    const result = utils.formatSecretKey({
      secretKey:
        '-----BEGIN PUBLIC KEY-----\ndGVzdA==\n-----END PUBLIC KEY-----',
      type: 'PUBLIC KEY'
    })

    const expected = `${[
      '-----BEGIN PUBLIC KEY-----',
      'dGVzdA==',
      '-----END PUBLIC KEY-----'
    ].join('\n')}`

    assert(typeof result === 'string')
    assert(result === expected)

    const nullHeadSecretKeyResult = utils.formatSecretKey({
      secretKey: 'dGVzdA==',
      type: 'PUBLIC KEY'
    })

    assert(nullHeadSecretKeyResult === expected)
  })

  it('Should be the result of Util.sign', async () => {
    const utils = new Util()

    sinon
      .stub(utils, 'formatSecretKey')
      .returns(
        fs.readFileSync(
          path.join(__dirname, '../public/privateKey.pem'),
          'ascii'
        )
      )

    const result = utils.sign({
      signStr: 'dGVzdA==321321312321321312',
      privateKey: 'dGVzdA=='
    })

    assert(typeof result === 'string')
  })

  it('Should be the result of Util.validateSign', async () => {
    const utils = new Util()

    sinon
      .stub(utils, 'formatSecretKey')
      .returns(
        fs.readFileSync(
          path.join(__dirname, '../public/cert/weChatPayPublicCert.pem'),
          'ascii'
        )
      )

    const timestamp = '1610615188'
    const nonceStr = 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ'
    const body = {
      id: 'b107bbad-8d05-5c20-8c6a-ccef467722a0',
      create_time: '2021-01-14T17:06:21+08:00',
      resource_type: 'encrypt-resource',
      event_type: 'TRANSACTION.SUCCESS',
      summary: '支付成功',
      resource: {
        original_type: 'transaction',
        algorithm: 'AEAD_AES_256_GCM',
        ciphertext:
          'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
        associated_data: 'transaction',
        nonce: 'OvMzjQVI0urP'
      }
    }

    const result = utils.validateSign({
      signStr: `${[timestamp, nonceStr, JSON.stringify(body)].join('\n')}\n`,
      weChatPayPublicKey: 'dGVzdA==',
      sign:
        'tIHr+yf2DY/XB8P/93NK0OV97afvsCAEJXCUSeeDEScou1MR0P8dvtYWsc2VXg+fu2pwEZ2wy2vsDDANHyUbiO4ITUTPPIjVexUDGjIEf3/powkrPL/ZbLDFJCuGeGRYN+wxy4CG7BTDN15eNzzJI0YDWbHx43wYkNsaTqRrVDn4blgWEvwlRu7wbhWN4PzZ7AcCtBAA2S28fnoMlxZaV6hy01sxzBAWzjOTC5sSW50/i092huprvojQlXvK7RdxRo2+zKiFra9G0HPizsvbwZjfNBFyFYJvL6GVCNAqmll0LaZWu70lOwePH7geXhfbLLR2+gIWEOCBWsilwAYp4Q=='
    })

    assert(result === true)
  })

  it('Should be the result of Util.generateNonceStr', async () => {
    const utils = new Util()
    const result = utils.generateNonceStr(17)

    assert(typeof result === 'string')
    assert(result.length === 17)
  })
})
