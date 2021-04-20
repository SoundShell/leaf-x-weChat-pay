import {
  InitGetPublicKeyCertificate,
  WeChatPublicKeyCertificate
} from '../src/interface/publicKeyCertificate.interface'
import { initDecrypt } from './decrypt'
import { initRequest } from './request'

export const initGetPublicKeyCertificate: InitGetPublicKeyCertificate = (
  weChatPayOptions
) => async () => {
  const { url } = weChatPayOptions
  const request = initRequest(weChatPayOptions)
  const result = (await request({
    method: 'GET',
    url: `${url}/v3/certificates`
  })) as { data: WeChatPublicKeyCertificate[] }

  const decrypt = initDecrypt(weChatPayOptions)

  return result.data.map(
    ({ effectiveTime, expireTime, encryptCertificate, serialNo }) => ({
      effectiveTime,
      expireTime,
      serialNo,
      certificate: decrypt(encryptCertificate) as string
    })
  )
}
