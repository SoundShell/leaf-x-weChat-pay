import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import * as sinon from 'sinon';
import {
  getAppToken,
  getJavascriptApiToken,
  getRequestToken,
  initValidateResponseSign,
} from '../src/token';
import {weChatPay} from '../src/we_chat_pay';

describe('test/token.test.ts', () => {
  it('should be the result of getting the request token', async () => {
    const timestamp = `${Math.trunc(Date.now() / 1000)}`;
    const result = getRequestToken({
      method: 'POST',
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/private_key.pem'),
        'ascii'
      ),
      merchantId: 'ZmZmc2Rmcw==',
      serialNo: 'c2Rmc2FkZ2hoampoanNkYWZzZGFmYXNk',
      timestamp,
    });

    assert(typeof result === 'string');
  });

  it('should be the result of getting the JSON request token', async () => {
    const timestamp = `${Math.trunc(Date.now() / 1000)}`;
    const result = getRequestToken({
      method: 'POST',
      body: {},
      url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/private_key.pem'),
        'ascii'
      ),
      merchantId: 'ZmZmc2Rmcw==',
      serialNo: 'c2Rmc2FkZ2hoampoanNkYWZzZGFmYXNk',
      timestamp,
    });

    assert(typeof result === 'string');
  });

  it('should be the result of obtaining a JavaScript API token', async () => {
    const timestamp = `${Math.trunc(Date.now() / 1000)}`;
    const result = getJavascriptApiToken({
      appId: 'POST',
      prepayString: 'prepay_id=86739283838457',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/private_key.pem'),
        'ascii'
      ),
      timestamp,
    });

    assert(typeof result === 'object');
  });

  it('should be the result of getting the application token', async () => {
    const timestamp = `${Math.trunc(Date.now() / 1000)}`;
    const result = getAppToken({
      appId: 'dnZzZGZ3MTIzMjFkZmZnZw==',
      prepayId: '556621223334',
      privateKey: fs.readFileSync(
        path.join(__dirname, '../public/certificate/private_key.pem'),
        'ascii'
      ),
      timestamp,
    });

    assert(typeof result === 'object');
  });

  it('should be the result of a signature verification', async () => {
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

    const result = pay.validateResponseSign({
      serialNo: '75ccb679260e5ee60febbf314237c746dc85798a'.toUpperCase(),
      nonceStr: 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ',
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
          nonce: 'OvMzjQVI0urP',
        },
      },
      sign: 'tIHr+yf2DY/XB8P/93NK0OV97afvsCAEJXCUSeeDEScou1MR0P8dvtYWsc2VXg+fu2pwEZ2wy2vsDDANHyUbiO4ITUTPPIjVexUDGjIEf3/powkrPL/ZbLDFJCuGeGRYN+wxy4CG7BTDN15eNzzJI0YDWbHx43wYkNsaTqRrVDn4blgWEvwlRu7wbhWN4PzZ7AcCtBAA2S28fnoMlxZaV6hy01sxzBAWzjOTC5sSW50/i092huprvojQlXvK7RdxRo2+zKiFra9G0HPizsvbwZjfNBFyFYJvL6GVCNAqmll0LaZWu70lOwePH7geXhfbLLR2+gIWEOCBWsilwAYp4Q==',
    });

    assert(result);
  });

  it('should be the result of an invalid certificate', async () => {
    const responseSign = initValidateResponseSign(
      path.join(__dirname, '../public/certificate/we_chat')
    );

    try {
      responseSign({
        serialNo: '75ccb679260e5ee60febbf314237c746dc85798'.toUpperCase(),
        nonceStr: 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ',
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
            nonce: 'OvMzjQVI0urP',
          },
        },
        sign: 'tIHr+yf2DY/XB8P/93NK0OV97afvsCAEJXCUSeeDEScou1MR0P8dvtYWsc2VXg+fu2pwEZ2wy2vsDDANHyUbiO4ITUTPPIjVexUDGjIEf3/powkrPL/ZbLDFJCuGeGRYN+wxy4CG7BTDN15eNzzJI0YDWbHx43wYkNsaTqRrVDn4blgWEvwlRu7wbhWN4PzZ7AcCtBAA2S28fnoMlxZaV6hy01sxzBAWzjOTC5sSW50/i092huprvojQlXvK7RdxRo2+zKiFra9G0HPizsvbwZjfNBFyFYJvL6GVCNAqmll0LaZWu70lOwePH7geXhfbLLR2+gIWEOCBWsilwAYp4Q==',
      });
    } catch (error) {
      assert(error.message === 'No valid certificate found.');
    }
  });

  it('should be the result of an expired certificate', async () => {
    sinon.stub(Date, 'now').returns(1762939888000);
    sinon.stub(fs, 'unlinkSync').returns();

    const responseSign = initValidateResponseSign(
      path.join(__dirname, '../public/certificate/we_chat')
    );

    responseSign({
      serialNo: '75ccb679260e5ee60febbf314237c746dc85798a'.toUpperCase(),
      nonceStr: 'mq4yHA14CcQ45OhUf0xhO3dd8qsVc6FQ',
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
          nonce: 'OvMzjQVI0urP',
        },
      },
      sign: 'tIHr+yf2DY/XB8P/93NK0OV97afvsCAEJXCUSeeDEScou1MR0P8dvtYWsc2VXg+fu2pwEZ2wy2vsDDANHyUbiO4ITUTPPIjVexUDGjIEf3/powkrPL/ZbLDFJCuGeGRYN+wxy4CG7BTDN15eNzzJI0YDWbHx43wYkNsaTqRrVDn4blgWEvwlRu7wbhWN4PzZ7AcCtBAA2S28fnoMlxZaV6hy01sxzBAWzjOTC5sSW50/i092huprvojQlXvK7RdxRo2+zKiFra9G0HPizsvbwZjfNBFyFYJvL6GVCNAqmll0LaZWu70lOwePH7geXhfbLLR2+gIWEOCBWsilwAYp4Q==',
    });

    sinon.restore();
  });
});
