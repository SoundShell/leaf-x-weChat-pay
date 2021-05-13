import * as fetch from '@leaf-x/fetch';
import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import * as sinon from 'sinon';
import {weChatPay} from '../src/we_chat_pay';

describe('test/publicKeyCertificate.test.ts', () => {
  it('should be the result of obtaining a public key certificate', async () => {
    sinon.stub(fetch, 'fetch').resolves({
      status: 200,
      data: {
        data: [
          {
            effective_time: '2020-11-13T17:31:28+08:00',
            encrypt_certificate: {
              algorithm: 'AEAD_AES_256_GCM',
              associated_data: 'certificate',
              ciphertext:
                'BYmxiknXXFnJM5XToExeDIh14qzOHUGqqJoj7mWYDNAV4sXA0DZ6dcvNh9zYt+yoeO8q9995aTwrWQLmoCAlk2iHnWwtdzoukAHdeoy+z2fnxXzuW5isr0298kNJXXDb4l7KGQou0qKGU4sUQ67GdicU72qhpXnPecnD9ERF0iGeA9nnIA9hy3hwIloy55bI4OOGo81zrjy15ujazRzhHkuB5dev92JGHySx5ZekMY0hCggrKB7xtIFcyiSaczpIP7VhF6eqEwm1zpLpP3St1AmdHau8Pv8h/+/oZnpsfvAUBBNT97moudR3DUkb/zK1J3YowMhfqEFwCmfWEQV6lNwl2yHoBWRiUOmLEd+pWpvxoXWz0pYathNnMHEVT98Tb5EtbqhS5KVdtToG/x5HP7Hzi62MafrerT/KU/5gcFQ3dW2Q+SbhTxIh+vdPlhIDuU2EgjNipSYzQp5rhdQrdwOlnWWKr/Zy9cWQN9Gfhl/GFpkZHW7AT0ubJVLwKiSXw8TQ8T0s1N0m+fq1ri/dVTQR6mgT0vqnRAW79lv7Rxl+EnffCtnsEb2dRw4sl+5UZGrq6k7VlcEjjExpjH8GWc6UCvAnX7EPE2QCBu5vcD+5z6CrQ5+ddANTG3+WOy0tuHSyd/unKmMtW0ElZhGxrcLujbZoTdA0BzKOx+RCBIPEpkYLrf8O0Zxg2cor1cmQcjH6/IecrAqu6pEX3tb6yfEULYuRMRPVQdPnLVMl3+miZPcyFiHIBd4J5N1od8mMFS0+tczZ8+IH0G/bQaXaf4Ag4X7hRcdvuXuYjpkaPGiwS38INx5O+FodYoZ1Qmtlz/GQQfWiCJ5vSK7HzPTXqgerQO/kDnPx5XApBFTG1OaMApP98I2SYJ25BaikiklVrCOaa/RaglqVRbbet0QcbtY6gF9hViW5w2oP1eSpSO3onDAZelYzc5pfvhUrqT0ThcOT8eoV6g/dy1EXakGtocvzs1sQKgxtwKxN89LiT1Ailpgk609WCgzEiwz8HmkPLrXEUpf4JAxxAMYVuLpUdM/fYwhV6Wlp8GzXeoIGgRtzhEz8434ZGk67lBNOoDOZ7eJMvrdnfWXXaQS0WzdGGShnjyB/vn62uIhua/YCgFT9vsE7uXHtwbwswuCfat2G3uDUqc3rA0q6wgcgjqz3NOOYdDrlsZUA+xmJXWBeMRD3XPr2+nIgFzpHn0G00r2J9taE9t/Z54DmSPOt45g0aJsS1a6ftNtIrOPgNI37usJ+4foLOT+WPROe7CtnyjZncBf7SCn0hKmroHjhEEWmmd2eysknn13HDY1xvQ2cwDQHzEWn8xGDPcwww2B0rmH2LSk/9+vx/AZR/JNejjUUAHITJWEuEFZfOwxvi8IzugNU5RQ7cTBPCiX7TyhuIaPpM0NOReefOxFjt3NkVPjLibFp69eX6dBfQorqyT48OaVaqXa7EYfujaA89odbbLDG7E2hC9DFU5Hrr87Lnf/helTjbCeNuVywjU7TTmPrTEsUgeSexj7O/zOOYjQGf74RIzSg9l1IbtmsBzxW1D2KHJcUFuCtU+Rsge/j791r0hEFnQU1qeu3Gg2G35hXM9i1O/CpxEvhuID4cRfIm3JBSb2d4rJHmosiGn5n4z8odWF54ECNCDjctlt1yaKPxwXVvjfasDP7wVqAqL8g+IvoGeTKtE7ZJsDI42hxDTzqx2i1/4RlMmbXkyihjzJ6KrNRvJUuf+H7dJd8sTZ8uGkL7Z3Z6ssJ9cgJRlt9yeRJMoE6y+ZCBIGMxuyYUmrwImu22zc7QCMxNPvL0LvbHeZqI8HdPspVzEPs+8unizVkgRbjmvqhMTilCgaW4V3abmxoh66rRxQHINx7FHfqvyVSEqCJiTROvw==',
              nonce: 'e1a87b9da00a',
            },
            expire_time: '2025-11-12T17:31:28+08:00',
            serial_no: '75CCB679260E5EE60FEBBF314237C746DC85798A',
          },
        ],
      },
      headers: {
        'cache-control': 'no-cache, must-revalidate',
        connection: 'close',
        'content-language': 'zh-CN',
        'content-length': '2168',
        'content-type': 'application/json; charset=utf-8',
        date: 'Wed, 12 May 2021 13:53:15 GMT',
        'request-id': '08CBBBEF840610AF0118A7B8B74C209F5928FDD803-0',
        server: 'nginx',
        'wechatpay-nonce': 'dd4f366aba8a4edd3b8652917d786bfb',
        'wechatpay-serial': '75CCB679260E5EE60FEBBF314237C746DC85798A',
        'wechatpay-signature':
          'XA9+gvDiK1b5KMPnGQ6KlVqxp9/4NQG4pwmH3ppfx1mD9dUbOsbXRNVc7e71TldKIBx4ve1UBSmGfFQOFrgWm7orPDV7oWUg/ayA44DGZ5CRtOZ7/pE3GKQNXa5urC0RYlnNLJgst37HcclcCYsXcvhB9YBaSwfIZHi60xNkiugEHqizvXo+gkZ/8agtbWzzDcZwQRxVS++g27ozhSmH22+ODHcv4UWFw28dHJECtVKehIZV8OEKN41AUVupDYz6Qyt5De7QIdLLMAOr0Blgxm4mwnXijtsh3o0zKRAF/lTdX04SX7woRtqLb3Lt4n+G3glkkfDmn2voPez6EPrysQ==',
        'wechatpay-timestamp': '1620827595',
        'x-content-type-options': 'nosniff',
      },
      statusText: '',
      url: '',
    });

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

    await pay.getPublicKeyCertificate().then(result => {
      sinon.restore();

      assert(Array.isArray(result));
      assert(typeof result[0] === 'object');
      assert(typeof result[0].certificate === 'string');
    });
  });
});
