# WeChatPay

WeChat pay V3 API.

## Installation

> npm install @leaf-x/we-chat-pay --save

## Parameters

| Name                  | Type   | Default Value                 | Description                       |
| :-------------------- | :----- | :---------------------------- | :-------------------------------- |
| appId                 | String |                               | WeChat app ID.                    |
| publicAppId           | String |                               | WeChat public ID.                 |
| merchantId            | String | Required                      | Merchant ID.                      |
| merchantKey           | String | Required                      | Merchant key.                     |
| schema                | string | WECHATPAY2-SHA256-RSA2048     | Encryption algorithm mode.        |
| privateKey            | String | Required                      | Private key.                      |
| publicCertificatePath | String |                               | Public key certificate path.      |
| publicCertificateDir  | String |                               | Public key certificate directory. |
| serialNo              | String | Required                      | Certificate number.               |
| url                   | String | https://api.mch.weixin.qq.com | Api url address.                  |
| timeout               | Number | 3000                          | Timeout time, in milliseconds.    |

## Use

```typescript
import {weChat} from '@leaf-x/we-chat-pay';

const pay = weChat({
  appId: 'wx3fb4x113xx8i',
  merchantId: '2362183',
  merchantKey: '123db752cf2c6955122d26d5',
  serialNo: '6D22333S311033394317A3332C444F31112371F',
  privateKey: fs.readFileSync(
    path.join(__dirname, '../public/certificate/private_key.pem'),
    'ascii'
  ),
  publicCertificateDir: path.join(__dirname, '../public/certificate/we_chat'),
});

const result = await pay.getAppPay({
  description: 'test',
  outTradeNo: '2133455555111233567',
  timeExpire: new Date(),
  notifyUrl: 'https://dev.api.leaf-x.com/v3/notifies',
  amount: {total: 1, currency: 'CNY'},
  sceneInfo: {payerClientIp: '127.0.0.0'},
});

console.info(result);
```
