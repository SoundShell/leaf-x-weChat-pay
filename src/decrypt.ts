import * as crypto from 'crypto'
import { Decrypt } from 'src/interface/decrypt.interface'

export const decrypt: Decrypt = (config) => (options) => {
  const { merchantKey } = config

  if (!merchantKey) {
    throw new Error('Missing merchant key.')
  }

  const { nonce, associated_data: associatedData, ciphertext } = options
  const cipherTextBuffer = Buffer.from(ciphertext, 'base64')
  const authTag = cipherTextBuffer.slice(cipherTextBuffer.length - 16)
  const data = cipherTextBuffer.slice(0, cipherTextBuffer.length - 16)
  const decipher = crypto.createDecipheriv('aes-256-gcm', merchantKey, nonce)

  decipher.setAuthTag(Buffer.from(authTag))

  if (associatedData) {
    decipher.setAAD(Buffer.from(associatedData))
  }

  const decryptString = decipher.update(data, undefined, 'utf8')

  decipher.final()

  return decryptString
}
