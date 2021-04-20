import { InitShowPay, ShowPayResult } from '../src/interface/showPay.interface'
import { initRequest } from './request'

export const initShowPay: InitShowPay = (options) => ({
  transactionId,
  outTradeNo
}) => {
  const { url, merchantId } = options
  const request = initRequest(options)

  return request({
    method: 'GET',
    url: transactionId
      ? `${url}/v3/pay/transactions/id/${transactionId}?mchid=${merchantId}`
      : `${url}/v3/pay/transactions/out-trade-no/${outTradeNo}?mchid=${merchantId}`
  }) as Promise<ShowPayResult>
}
