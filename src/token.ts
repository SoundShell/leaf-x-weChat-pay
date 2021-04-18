import * as crypto from 'crypto'
import {
  FormatSecretKey,
  GenerateNonceString,
  GetAppToken,
  GetJavascriptApiToken,
  GetRequestToken,
  Sign,
  ValidateSign
} from 'src/interface/token.interface'

const generateNonceString: GenerateNonceString = (length: number) => {
  return Array(length)
    .fill('')
    .map(() => Math.random().toString(36).charAt(2))
    .join('')
}

const formatSecretKey: FormatSecretKey = ({ secretKey, type }) => {
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

export const getRequestToken: GetRequestToken = ({
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

  const signString = `${[method, path, timestamp, nonceString, bodyString].join(
    '\n'
  )}\n`

  const token = Object.freeze({
    mchid: merchantId,
    nonce_str: nonceString,
    timestamp,
    serial_no: serialNo,
    signature: sign({ signString, privateKey })
  })

  return Object.keys(token)
    .map((key) => `${key}="${token[key as keyof typeof token]}"`)
    .join(',')
}

export const getJavascriptApiToken: GetJavascriptApiToken = ({
  appId,
  prepayString,
  privateKey,
  timestamp
}) => {
  const nonceString = generateNonceString(17)
  const signString = `${[appId, timestamp, nonceString, prepayString].join(
    '\n'
  )}\n`

  return { nonceString, timestamp, sign: sign({ signString, privateKey }) }
}

export const getAppToken: GetAppToken = ({
  appId,
  prepayId,
  privateKey,
  timestamp
}) => {
  const nonceString = generateNonceString(17)
  const signString = `${[appId, timestamp, nonceString, prepayId].join('\n')}\n`

  return { nonceString, timestamp, sign: sign({ signString, privateKey }) }
}

export const validateSign: ValidateSign = ({ publicKey, sign, signString }) => {
  const key = formatSecretKey({ secretKey: publicKey, type: 'PUBLIC KEY' })

  return crypto
    .createVerify('RSA-SHA256')
    .update(signString)
    .verify(key, sign, 'base64')
}

export const sign: Sign = ({ signString, privateKey }) => {
  const key = formatSecretKey({ secretKey: privateKey, type: 'PRIVATE KEY' })

  return crypto
    .createSign('RSA-SHA256')
    .update(signString, 'utf8')
    .sign(key, 'base64')
}
