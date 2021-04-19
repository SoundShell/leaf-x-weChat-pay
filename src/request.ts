import fetch from '@leaf-x/fetch'
import * as camelcaseKeys from 'camelcase-keys'
import * as snakeCaseKeys from 'snakecase-keys'
import { InitRequest, ValidateResponse } from 'src/interface/request.interface'
import { getRequestToken, initValidateResponseSign } from './token'

const validateResponse: ValidateResponse = (options) => ({ data, headers }) => {
  const result = initValidateResponseSign(options)({
    nonceString: headers['wechatpay-nonce'] as string,
    timestamp: headers['wechatpay-timestamp'] as string,
    sign: headers['wechatpay-signature'] as string,
    serialNo: headers['wechatpay-serial'] as string,
    body: data as Record<string, unknown>
  })

  if (!result) {
    throw { status: 403, message: 'Response signature error.' }
  }

  return camelcaseKeys(data as Record<string, unknown>, { deep: true })
}

export const initRequest: InitRequest = (options) => async ({
  method = 'GET',
  url,
  body,
  headers = { 'content-type': 'application/json; charset=utf-8' },
  publicApp = false
}) => {
  const {
    appId,
    publicAppId,
    privateKey,
    merchantId,
    serialNo,
    schema,
    timeout = 3000
  } = options
  const json = typeof body === 'object' && body !== null

  if (body && json) {
    Object.assign(body, {
      appid: publicApp ? publicAppId : appId,
      mchid: merchantId
    })
  }

  const data =
    body && json
      ? JSON.stringify(
          snakeCaseKeys(body as Record<string, unknown>, { deep: true })
        )
      : null

  const token = getRequestToken({
    method,
    url,
    body: data,
    privateKey,
    merchantId,
    serialNo,
    timestamp: `${parseInt((Date.now() / 1000).toString())}`
  })

  Object.assign(headers, {
    Authorization: `${schema} ${token}`,
    'user-agent': `Node.js(${process.version}) OS(${process.platform}/${process.arch})`
  })

  return fetch(url, {
    method,
    body: data,
    headers,
    timeout
  }).then(validateResponse(options))
}
