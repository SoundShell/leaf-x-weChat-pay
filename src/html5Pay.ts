import { GetHtml5Pay } from 'src/interface/html5Pay.interface'
import { request } from './request'

export const getHtml5Pay: GetHtml5Pay = (weChatPayOptions) => async (
  options
) => {
  const { url } = weChatPayOptions
  const fetch = request(weChatPayOptions)
  const { h5_url } = (await fetch({
    method: 'POST',
    url: `${url}/v3/pay/transactions/h5`,
    body: options
  })) as { h5_url: string }

  return { url: h5_url }
}
