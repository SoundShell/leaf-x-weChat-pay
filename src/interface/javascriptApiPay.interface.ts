import { GetTokenResult } from './token.interface'
import {
  AmountOptions,
  OrderOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * Get the JavaScript API payment options.
 *
 * @extends OrderOptions
 */
export interface GetJavascriptApiPayOptions extends OrderOptions {
  amount: AmountOptions

  /**
   * WeChat public user information.
   */
  payer: {
    /**
     * WeChat public user ID.
     */
    openid: string
  }
}

/**
 * Get the results of the JavaScript API payment.
 *
 * @extends GetTokenResult
 */
export interface GetJavascriptApiPayResult extends GetTokenResult {
  /**
   * Application ID.
   */
  appId: string

  /**
   * Signature type.
   */
  signType: string

  /**
   * Pay details.
   */
  package: {
    /**
     * Pre-payment ID.
     */
    prepayId: string
  }
}

/**
 * Initialization get JavaScript API payment.
 *
 * @param options WeChatPayOptions
 * @return GetJavascriptApiPay
 */
export interface InitGetJavascriptApiPay {
  (options: WeChatPayOptions): GetJavascriptApiPay
}

/**
 * Get JavaScript API payments.
 *
 * @param options GetJavascriptApiPayOptions
 * @return Promise<GetJavascriptApiPayResult>
 */
export interface GetJavascriptApiPay {
  (options: GetJavascriptApiPayOptions): Promise<GetJavascriptApiPayResult>
}
