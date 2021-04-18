import { IndexPay, IndexPayResult } from 'src/interface/indexPay.interface'
import { request } from './request'

export const indexPay: IndexPay = (weChatPayOptions) => ({
  transactionId,
  outTradeNo
}) => {
  const { url, merchantId } = weChatPayOptions
  const fetch = request(weChatPayOptions)

  return fetch({
    method: 'GET',
    url: transactionId
      ? `${url}/v3/pay/transactions/id/${transactionId}?mchid=${merchantId}`
      : `${url}/v3/pay/transactions/out-trade-no/${outTradeNo}?mchid=${merchantId}`
  }) as Promise<IndexPayResult>
}
