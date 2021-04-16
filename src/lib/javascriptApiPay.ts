import { GetJavascriptApiPayFunction } from 'src/interface/javascriptApiPay.interface'
import { execRequest } from './request'
import { getJavascriptApiToken } from './token'

export const getJavascriptApiPay: GetJavascriptApiPayFunction = (
  config
) => async (options) => {
  const { url, publicAppId, privateKey } = config

  if (!publicAppId) {
    throw new Error('Missing public app id.')
  }

  const request = execRequest(config)
  const { prepay_id } = (await request({
    method: 'POST',
    url: `${url}/v3/pay/transactions/jsapi`,
    body: options,
    publicApp: true
  })) as { prepay_id: string }

  const prepay = Object.freeze({ prepay_id })
  const prepayString = Object.keys(prepay)
    .map((key) => `${key}=${prepay[key as keyof typeof prepay]}`)
    .toString()

  const token = getJavascriptApiToken({
    appId: publicAppId,
    prepayString,
    privateKey,
    timestamp: `${parseInt((Date.now() / 1000).toString())}`
  })

  return {
    appId: publicAppId,
    signType: 'RSA',
    package: { prepayId: prepayString },
    ...token
  }
}
