import { IndexPayResult, InitIndexPay } from 'src/interface/indexPay.interface'
import { initRequest } from './request'

export const initIndexPay: InitIndexPay = (weChatPayOptions) => ({
  transactionId,
  outTradeNo
}) => {
  const { url, merchantId } = weChatPayOptions
  const request = initRequest(weChatPayOptions)

  return request({
    method: 'GET',
    url: transactionId
      ? `${url}/v3/pay/transactions/id/${transactionId}?mchid=${merchantId}`
      : `${url}/v3/pay/transactions/out-trade-no/${outTradeNo}?mchid=${merchantId}`
  }) as Promise<IndexPayResult>
}
