import { GetAppPayFunction } from 'src/interface/appPay.interface'
import { execRequest } from './request'
import { getAppToken } from './token'

export const getAppPay: GetAppPayFunction = (config) => async (options) => {
  const { url, appId, privateKey, merchantId } = config

  if (!appId) {
    throw new Error('Missing app id.')
  }

  const request = execRequest(config)
  const { prepay_id } = (await request({
    method: 'POST',
    url: `${url}/v3/pay/transactions/app`,
    body: options
  })) as { prepay_id: string }

  const appToken = getAppToken({
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
    ...appToken
  }
}
