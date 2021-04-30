import { Certificate } from '@fidm/x509'
import * as crypto from 'crypto'
import * as fs from 'fs'
import * as snakeCaseKeys from 'snakecase-keys'
import {
  FormatSecretKey,
  GenerateNonceString,
  GetAppToken,
  GetJavascriptApiToken,
  GetRequestToken,
  InitValidateResponseSign,
  Sign,
  ValidateSign
} from '../src/interface/token.interface'

const generateNonceString: GenerateNonceString = (length) => {
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

const sign: Sign = ({ signString, privateKey }) => {
  const key = formatSecretKey({ secretKey: privateKey, type: 'PRIVATE KEY' })

  return crypto
    .createSign('RSA-SHA256')
    .update(signString, 'utf8')
    .sign(key, 'base64')
}

const validateSign: ValidateSign = ({ publicKey, sign, signString }) => {
  const key = formatSecretKey({ secretKey: publicKey, type: 'PUBLIC KEY' })

  return crypto
    .createVerify('RSA-SHA256')
    .update(signString)
    .verify(key, sign, 'base64')
}

export const getRequestToken: GetRequestToken = ({
  method,
  url,
  body = null,
  privateKey,
  merchantId,
  serialNo,
  timestamp
}) => {
  const nonceString = generateNonceString(17)
  const { pathname, search } = new URL(url)
  const path = `${pathname}${search}`
  const bodyString =
    body && typeof body === 'object' && body !== null
      ? JSON.stringify(body)
      : body

  const signString = `${[method, path, timestamp, nonceString, bodyString].join(
    '\n'
  )}\n`

  const token = Object.freeze(
    snakeCaseKeys({
      mchid: merchantId,
      nonceStr: nonceString,
      timestamp,
      serialNo: serialNo,
      signature: sign({ signString, privateKey })
    })
  )

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

  return {
    nonceStr: nonceString,
    timestamp,
    sign: sign({ signString, privateKey })
  }
}

export const getAppToken: GetAppToken = ({
  appId,
  prepayId,
  privateKey,
  timestamp
}) => {
  const nonceString = generateNonceString(17)
  const signString = `${[appId, timestamp, nonceString, prepayId].join('\n')}\n`

  return {
    nonceStr: nonceString,
    timestamp,
    sign: sign({ signString, privateKey })
  }
}

export const initValidateResponseSign: InitValidateResponseSign = ({
  publicCertificateDir
}) => ({ nonceStr, timestamp, body, sign, serialNo }) => {
  if (!publicCertificateDir) {
    throw new Error('Missing public key certificate directory.')
  }

  const signString = `${[
    timestamp,
    nonceStr,
    JSON.stringify(snakeCaseKeys(body, { deep: true }))
  ].join('\n')}\n`

  const certificateNames = fs.readdirSync(publicCertificateDir)

  let certificate!: string

  for (const certificateName of certificateNames) {
    const path = `${publicCertificateDir}/${certificateName}`
    const item = Certificate.fromPEM(fs.readFileSync(path))

    if (item.serialNumber.toUpperCase() === serialNo) {
      certificate = item.publicKeyRaw.toString('base64')
    }

    const unlink = new Date(item.validTo).valueOf() <= Date.now()

    if (unlink) {
      fs.unlinkSync(path)
    }
  }

  if (!certificate) {
    throw new Error('No valid certificate found.')
  }

  return validateSign({ sign, signString, publicKey: certificate })
}
