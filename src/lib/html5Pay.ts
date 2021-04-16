import { GetHtml5PayFunction } from 'src/interface/html5Pay.interface'
import { execRequest } from './request'

export const getHtml5Pay: GetHtml5PayFunction = (config) => async (options) => {
  const { url } = config
  const request = execRequest(config)
  const { h5_url } = (await request({
    method: 'POST',
    url: `${url}/v3/pay/transactions/h5`,
    body: options
  })) as { h5_url: string }

  return { url: h5_url }
}
