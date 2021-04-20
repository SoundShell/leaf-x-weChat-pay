import { InitGetAppPay } from '../src/interface/appPay.interface'
import { initRequest } from './request'
import { getAppToken } from './token'

export const initGetAppPay: InitGetAppPay = (weChatPayOptions) => async (
  options
) => {
  const { url, appId, privateKey, merchantId } = weChatPayOptions

  if (!appId) {
    throw new Error('Missing app id.')
  }

  const request = initRequest(weChatPayOptions)
  const { prepayId } = (await request({
    method: 'POST',
    url: `${url}/v3/pay/transactions/app`,
    body: options
  })) as { prepayId: string }

  const token = getAppToken({
    appId,
    prepayId,
    privateKey,
    timestamp: `${parseInt((Date.now() / 1000).toString())}`
  })

  return {
    appId,
    partnerId: merchantId,
    prepayId,
    package: 'Sign=WXPay',
    ...token
  }
}
