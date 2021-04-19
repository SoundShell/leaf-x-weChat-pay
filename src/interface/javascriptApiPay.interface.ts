import {
  AmountOptions,
  OrderOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * Get Javascript payment options.
 */
export interface GetJavascriptApiPayOptions extends OrderOptions {
  /**
   * Amount.
   */
  amount: AmountOptions

  /**
   * Payer information.
   */
  payer: {
    /**
     * User labeling.
     */
    openid: string
  }
}

/**
 * Get Javascript payment results.
 */
export interface GetJavascriptApiPayResult {
  /**
   * Application id.
   */
  appId: string

  /**
   * Signature type .
   */
  signType: string

  /**
   * Order details extension string.
   */
  package: {
    /**
     * Prepayment id
     */
    prepayId: string
  }

  /**
   * Random string.
   */
  nonceString: string

  /**
   * Timestamp.
   */
  timestamp: string

  /**
   * Signature.
   */
  sign: string
}

/**
 * Initialize Javascript payment.
 */
export interface InitJavascriptApiPay {
  (options: WeChatPayOptions): GetJavascriptApiPay
}

/**
 * Get the Javascript payment.
 */
export interface GetJavascriptApiPay {
  (options: GetJavascriptApiPayOptions): Promise<GetJavascriptApiPayResult>
}