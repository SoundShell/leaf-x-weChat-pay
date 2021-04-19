import { InitHtml5Pay } from 'src/interface/html5Pay.interface'
import { initRequest } from './request'

export const initHtml5Pay: InitHtml5Pay = (weChatPayOptions) => async (
  options
) => {
  const { url } = weChatPayOptions
  const request = initRequest(weChatPayOptions)
  const { h5Url } = (await request({
    method: 'POST',
    url: `${url}/v3/pay/transactions/h5`,
    body: options
  })) as { h5Url: string }

  return { url: h5Url }
}
