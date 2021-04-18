import fetch from '@leaf-x/fetch'
import { Request } from 'src/interface/request.interface'
import { getRequestToken } from './token'

export const request: Request = ({
  appId,
  publicAppId,
  privateKey,
  merchantId,
  serialNo,
  schema,
  timeout = 3000
}) => async ({
  method = 'GET',
  url,
  body,
  headers = { 'content-type': 'application/json; charset=utf-8' },
  publicApp = false
}) => {
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

  console.info(headers)

  return fetch(url, {
    method,
    body: body && body instanceof Object ? JSON.stringify(body) : '',
    headers,
    timeout
  }).then(({ data }) => data)
}
