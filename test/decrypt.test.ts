import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'
import { weChatPay } from '../src/weChatPay'

describe('test/decrypt.test.ts', () => {
  it('should be the result of decrypting and converting to JSON', async () => {
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
    })

    const result = pay.decrypt({
      originalType: 'transaction',
      algorithm: 'AEAD_AES_256_GCM',
      ciphertext:
        'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
      associatedData: 'transaction',
      nonce: 'OvMzjQVI0urP',
      formatJson: true
    })

    assert(typeof result === 'object')
  })

  it('should be the result of decryption', async () => {
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
    })

    const result = pay.decrypt({
      originalType: 'transaction',
      algorithm: 'AEAD_AES_256_GCM',
      ciphertext:
        'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
      associatedData: 'transaction',
      nonce: 'OvMzjQVI0urP'
    })

    assert(typeof result === 'string')
  })

  it('should be the result of decryption failure', async () => {
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
    })

    try {
      pay.decrypt({
        originalType: 'transaction',
        algorithm: 'AEAD_AES_256_GCM',
        ciphertext:
          'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
        nonce: 'OvMzjQVI0urP'
      })
    } catch (error) {
      assert(typeof error === 'object')
    }
  })

  it('should be the result of decrypting the missing merchant key', async () => {
    const pay = weChatPay({
      appId: 'wx3fb47680dc1a2e20',
      merchantId: '1565407881',
      serialNo: '6D2D23C326CC033394317A34702C281EF316D71F',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/privateKey.pem'),
        'ascii'
      ),
      publicCertificateDir: path.join(__dirname, '../public/certificate/weChat')
    })

    try {
      pay.decrypt({
        originalType: 'transaction',
        algorithm: 'AEAD_AES_256_GCM',
        ciphertext:
          'azuJbMWxc5IK0FgYcBolHLm3V7uxBno8knpvqHSfdTQcpZ4t4lN1I6UZTpAIhUC1hOH8QKlsKt8sjYJgVesmQHpTOUjYB0sjVmAJ/UltfSvydAFPVBzY7BLSI8bXizeh9/jMGdtZ4mBjH68JelnYk5JoKW9De2IGNLWEf6MSmOdn8QZpBOnjOMVP21qAzP6Z3CVoNOMoNPRvAJKsSsID9JxPgTqcZglWgmsrnZm2itC5bxh4uxjPJWeQogaZHFIlt61MQOLTpo7kCtfKgah0NM8sizFig9dX8j3wFJGNDavjm8NELUqiy6UO3Dtewrjd+f5SMna7m5KQVtQX8DUKNf3P/Q0pouzxJyH4uRQr9KrYgtNsaIYMd6oj3abvBQ5TCeTU5nFJMcyVgVaR5EZbU9b+A1HKc+QnpYrRAfQgpePwbyE5OmsRdLWgxIe6a8zZxZ2TpbX1ls8GKAQ022uKZanKXsL7aVPzRZ/oT1vGfEeBo2rw2OzmYNYrqFmoX7ph0VMAnjdRVtsiUA0ft8XSVlU9KNBHY1QxmisGBzhTJAXtzzhonZ80h/vn31f+VQ==',
        nonce: 'OvMzjQVI0urP'
      })
    } catch (error) {
      assert(typeof error === 'object')
    }
  })
})
