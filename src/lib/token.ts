import * as crypto from 'crypto'
import {
  FormatSecretKeyFunction,
  GenerateNonceStringFunction,
  GenerateSignFunction,
  GetAppTokenFunction,
  GetJavascriptApiTokenFunction,
  GetRequestTokenFunction,
  ValidateSignFunction
} from 'src/interface/token.interface'

export const getRequestToken: GetRequestTokenFunction = ({
  method,
  url,
  body = '',
  privateKey,
  merchantId,
  serialNo,
  timestamp
}) => {
  const nonceString = generateNonceString(17)
  const path = new URL(url).pathname
  const bodyString =
    body && body instanceof Object ? JSON.stringify(body) : body

  const signString = `${method}\n${path}\n${timestamp}\n${nonceString}\n${bodyString}\n`
  const sign = generateSign({ signString, privateKey })
  const token = Object.freeze({
    mchid: merchantId,
    nonce_str: signString,
    timestamp,
    serial_no: serialNo,
    signature: sign
  })

  return Object.keys(token)
    .map((key) => `${key}="${token[key as keyof typeof token]}"`)
    .join(',')
}

export const getJavascriptApiToken: GetJavascriptApiTokenFunction = ({
  appId,
  prepayString,
  privateKey,
  timestamp
}) => {
  const nonceString = generateNonceString(17)
  const signString = `${appId}\n${timestamp}\n${nonceString}\n${prepayString}\n`
  const sign = generateSign({ signString, privateKey })

  return { nonceString, timestamp, sign }
}

export const getAppToken: GetAppTokenFunction = ({
  appId,
  prepayId,
  privateKey,
  timestamp
}) => {
  const nonceString = generateNonceString(17)
  const signString = `${appId}\n${timestamp}\n${nonceString}\n${prepayId}\n`
  const sign = generateSign({ signString, privateKey })

  return { nonceString, timestamp, sign }
}

export const validateSign: ValidateSignFunction = ({
  publicKey,
  sign,
  signString
}) => {
  const key = formatSecretKey({ secretKey: publicKey, type: 'PUBLIC KEY' })

  return crypto
    .createVerify('RSA-SHA256')
    .update(signString)
    .verify(key, sign, 'base64')
}

export const generateNonceString: GenerateNonceStringFunction = (
  length: number
) => {
  return Array(length)
    .fill('')
    .map(() => Math.random().toString(36).charAt(2))
    .join('')
}

export const generateSign: GenerateSignFunction = ({
  signString,
  privateKey
}) => {
  const key = formatSecretKey({ secretKey: privateKey, type: 'PRIVATE KEY' })

  return crypto
    .createSign('RSA-SHA256')
    .update(signString, 'utf8')
    .sign(key, 'base64')
}

export const formatSecretKey: FormatSecretKeyFunction = ({
  secretKey,
  type
}) => {
  const item = secretKey
    .split('\n')
    .map((val) => val.trim())
    .filter((val) => val)

  if (item[0].includes(type)) {
    item.shift()
  }

  if (item[item.length - 1].includes(type)) {
    item.pop()
  }

  return `-----BEGIN ${type}-----\n${item.join('')}\n-----END ${type}-----`
}
