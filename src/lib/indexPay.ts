import {
  IndexPayFunction,
  IndexPayResult
} from 'src/interface/indexPay.interface'
import { execRequest } from './request'

export const indexPay: IndexPayFunction = (config) => ({
  transactionId,
  outTradeNo
}) => {
  const { url, merchantId } = config
  const request = execRequest(config)

  return request({
    method: 'GET',
    url: transactionId
      ? `${url}/v3/pay/transactions/id/${transactionId}?mchid=${merchantId}`
      : `${url}/v3/pay/transactions/out-trade-no/${outTradeNo}?mchid=${merchantId}`
  }) as Promise<IndexPayResult>
}
