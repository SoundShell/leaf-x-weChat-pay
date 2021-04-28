import { GetTokenResult } from './token.interface'
import {
  AmountOptions,
  OrderOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * Get Javascript payment options.
 *
 * @extends OrderOptions
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
 *
 * @extends GetTokenResult
 */
export interface GetJavascriptApiPayResult extends GetTokenResult {
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
}

/**
 * Initialize to get Javascript payment.
 *
 * @param options WeChatPayOptions
 * @return GetJavascriptApiPay
 */
export interface InitGetJavascriptApiPay {
  (options: WeChatPayOptions): GetJavascriptApiPay
}

/**
 * Get the Javascript payment.
 *
 * @param options GetJavascriptApiPayOptions
 * @return Promise<GetJavascriptApiPayResult>
 */
export interface GetJavascriptApiPay {
  (options: GetJavascriptApiPayOptions): Promise<GetJavascriptApiPayResult>
}
