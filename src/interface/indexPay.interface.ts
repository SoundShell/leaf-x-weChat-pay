import { WeChatPayOptions } from './weChatPay.interface'

/**
 *  Indexed payment options.
 */
export interface IndexPayOptions {
  /**
   * WeChat payment order number.
   */
  transactionId?: string

  /**
   * Merchant order number.
   */
  outTradeNo?: string
}

/**
 * Indexed payment results.
 */
export interface IndexPayResult {
  /**
   * Application id.
   */
  appid: string

  /**
   * Merchant id.
   */
  mchid: string

  /**
   * Merchant order number.
   */
  out_trade_no: string

  /**
   * WeChat payment order number.
   */
  transaction_id?: string

  /**
   * Transaction type.
   */
  trade_type?: string

  /**
   * Transaction status.
   */
  trade_state:
    | 'SUCCESS'
    | 'REFUND'
    | 'NOTPAY'
    | 'CLOSED'
    | 'REVOKED'
    | 'USERPAYING'
    | 'PAYERROR'

  /**
   * Transaction status description.
   */
  trade_state_desc: string

  /**
   * Payment bank.
   */
  bank_type?: string

  /**
   * Additional data.
   */
  attach?: string

  /**
   * Payment completion time.
   */
  success_time?: string

  /**
   * Payer information.
   */
  payer: {
    /**
     * User identification.
     */
    openid: string
  }
}

/**
 * Indexed payment function.
 */
export interface IndexPay {
  (weChatPayOptions: WeChatPayOptions): (
    options: IndexPayOptions
  ) => Promise<IndexPayResult>
}
