import { WeChatPayOptions } from './weChatPay.interface'

/**
 *  Show payment options.
 */
export interface ShowPayOptions {
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
 * Show payment results.
 */
export interface ShowPayResult {
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
 * Initialize show payment.
 */
export interface InitShowPay {
  (options: WeChatPayOptions): ShowPay
}

/**
 * Show payment.
 */
export interface ShowPay {
  (options: ShowPayOptions): Promise<ShowPayResult>
}
