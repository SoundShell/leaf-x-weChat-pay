import { InitJavascriptApiPay } from 'src/interface/javascriptApiPay.interface'
import { initRequest } from './request'
import { getJavascriptApiToken } from './token'

export const initJavascriptApiPay: InitJavascriptApiPay = (
  weChatPayOptions
) => async (options) => {
  const { url, publicAppId, privateKey } = weChatPayOptions

  if (!publicAppId) {
    throw new Error('Missing public app id.')
  }

  const request = initRequest(weChatPayOptions)
  const { prepayId } = (await request({
    method: 'POST',
    url: `${url}/v3/pay/transactions/jsapi`,
    body: options,
    publicApp: true
  })) as { prepayId: string }

  const prepay = Object.freeze({ prepayId })
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
