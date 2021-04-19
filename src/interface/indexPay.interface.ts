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
  outTradeNo: string

  /**
   * WeChat payment order number.
   */
  transactionId?: string

  /**
   * Transaction type.
   */
  tradeType?: string

  /**
   * Transaction status.
   */
  tradeState:
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
  tradeStateDesc: string

  /**
   * Payment bank.
   */
  bankType?: string

  /**
   * Additional data.
   */
  attach?: string

  /**
   * Payment completion time.
   */
  successTime?: string

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
 * Initialize indexed payment.
 */
export interface InitIndexPay {
  (options: WeChatPayOptions): IndexPay
}

/**
 * Indexed payment.
 */
export interface IndexPay {
  (options: IndexPayOptions): Promise<IndexPayResult>
}
