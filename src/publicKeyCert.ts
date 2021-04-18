import { GetWeChatPublicKeyCert } from 'src/interface/publicKeyCert.interface'
import { decrypt } from './decrypt'
import { PublicKeyCert } from './interface/publicKeyCert.interface'
import { request } from './request'

export const getPublicKeyCert: GetWeChatPublicKeyCert = (
  weChatPayOptions
) => async () => {
  const { url } = weChatPayOptions
  const fetch = request(weChatPayOptions)
  const result = (await fetch({
    method: 'GET',
    url: `${url}/v3/certificates`
  })) as PublicKeyCert[]

  return result.map(
    ({ effective_time, expire_time, encrypt_certificate, serial_no }) => ({
      effectiveTime: effective_time,
      expireTime: expire_time,
      serialNo: serial_no,
      cert: decrypt(weChatPayOptions)(encrypt_certificate) as string
    })
  )
}
