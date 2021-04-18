import { Certificate } from '@fidm/x509'
import * as fs from 'fs'
import { ValidateSign } from 'src/interface/validateSign.interface'
import { validateSign as execValidateSign } from './token'

export const validateSign: ValidateSign = (config) => ({
  nonceString,
  timestamp,
  body,
  sign,
  serialNo
}) => {
  const { publicCertDir } = config

  if (!publicCertDir) {
    throw new Error('Missing public key certificate directory.')
  }

  const signString = `${timestamp}\n${nonceString}\n${JSON.stringify(body)}\n`
  const certNames = fs.readdirSync(publicCertDir)

  let cert!: string

  certNames.forEach((certName) => {
    const path = `${publicCertDir}/${certName}`
    const item = Certificate.fromPEM(fs.readFileSync(path))

    if (item.serialNumber.toUpperCase() === serialNo) {
      cert = item.publicKeyRaw.toString('base64')
    }

    const unlink = new Date(item.validTo).valueOf() <= Date.now()

    if (unlink) {
      fs.unlinkSync(path)
    }
  })

  if (!cert) {
    throw new Error('No valid certificate found.')
  }

  return execValidateSign({ sign, signString, publicKey: cert })
}
