import * as fetch from 'isomorphic-fetch'
import { ExecRequestFunction } from 'src/interface/request.interface'
import { getRequestToken } from './token'

export const request: ExecRequestFunction = (config) => async ({
  method = 'POST',
  url,
  body,
  headers = { 'content-type': 'application/json;charset=UTF-8' },
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
  } = config

  if (body && body instanceof Object) {
    Object.assign(body, {
      appid: publicApp ? publicAppId : appId,
      mchid: merchantId
    })
  }

  const token = getRequestToken({
    method,
    url,
    body,
    privateKey,
    merchantId,
    serialNo,
    timestamp: `${parseInt((Date.now() / 1000).toString())}`
  })

  Object.assign(headers, { Authorization: `${schema} ${token}` })

  const controller = new AbortController()
  const signal = controller.signal

  setTimeout(() => controller.abort(), timeout)

  return fetch(url, {
    method,
    body: body && body instanceof Object ? JSON.stringify(body) : '',
    headers,
    signal
  })
    .then((response) => {
      if (response.ok) {
        const data = response.headers
          .get('content-type')
          ?.startsWith('application/json')
          ? response.json()
          : response.text()

        return { data, headers: response.headers }
      } else {
        throw response
      }
    })
    .catch((error) => {
      throw error
    })
}
