import { WeChatPayOptions } from './weChatPay.interface'

/**
 *  Show the payment options.
 */
export interface ShowPayOptions {
  /**
   * Transaction ID.
   */
  transactionId?: string

  /**
   * Merchant order number.
   */
  outTradeNo?: string
}

/**
 * Show the results of the payment.
 */
export interface ShowPayResult {
  /**
   * Application ID.
   */
  appid: string

  /**
   * Merchant ID.
   */
  mchid: string

  /**
   * Merchant order number.
   */
  outTradeNo: string

  /**
   * Transaction ID.
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
   * WeChat public user information.
   */
  payer: {
    /**
     * WeChat public user ID.
     */
    openid: string
  }

  /**
   * Payment amount.
   */
  amount: {
    /**
     * Total amount
     */
    total: number

    /**
     * Currency type.
     */
    currency: string

    /**
     * User payment amount.
     */
    payerTotal: number

    /**
     * User payment currency.
     */
    payerCurrency: string
  }
}

/**
 * Initialization show payment.
 *
 * @param options WeChatPayOptions
 * @return ShowPay
 */
export interface InitShowPay {
  (options: WeChatPayOptions): ShowPay
}

/**
 * Show payment.
 *
 * @param options ShowPayOptions
 * @return Promise<ShowPayResult>
 */
export interface ShowPay {
  (options: ShowPayOptions): Promise<ShowPayResult>
}
