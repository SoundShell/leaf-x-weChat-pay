import { GetWeChatPublicKeyCertFunction } from 'src/interface/publicKeyCert.interface'
import { PublicKeyCert } from '../interface/publicKeyCert.interface'
import { decrypt } from './decrypt'
import { execRequest } from './request'

export const getPublicKeyCert: GetWeChatPublicKeyCertFunction = (
  config
) => async () => {
  const { url } = config
  const request = execRequest(config)
  const result = (await request({
    method: 'GET',
    url: `${url}/v3/certificates`
  })) as PublicKeyCert[]

  const execDecryption = decrypt(config)

  return result.map(
    ({ effective_time, expire_time, encrypt_certificate, serial_no }) => ({
      effectiveTime: effective_time,
      expireTime: expire_time,
      serialNo: serial_no,
      cert: execDecryption(encrypt_certificate) as string
    })
  )
}
