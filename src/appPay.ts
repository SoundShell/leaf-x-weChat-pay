import { InitAppPay } from 'src/interface/appPay.interface'
import { request } from './request'
import { getAppToken } from './token'

export const initAppPay: InitAppPay = (weChatPayOptions) => async (options) => {
  const { url, appId, privateKey, merchantId } = weChatPayOptions

  if (!appId) {
    throw new Error('Missing app id.')
  }

  const fetch = request(weChatPayOptions)
  const { prepay_id } = (await fetch({
    method: 'POST',
    url: `${url}/v3/pay/transactions/app`,
    body: options
  })) as { prepay_id: string }

  const token = getAppToken({
    appId,
    prepayId: prepay_id,
    privateKey,
    timestamp: `${parseInt((Date.now() / 1000).toString())}`
  })

  return {
    appId,
    partnerId: merchantId,
    prepayId: prepay_id,
    package: 'Sign=WXPay',
    ...token
  }
}
