import {GetTokenResult} from './token.interface';
import {
  AmountOptions,
  OrderOptions,
  WeChatPayOptions,
} from './we_chat_pay.interface';

/**
 * Get JavaScript API payment options.
 *
 * @extends OrderOptions
 */
export interface GetJavascriptApiPayOptions extends OrderOptions {
  /**
   * Payment amount options.
   */
  amount: AmountOptions;

  /**
   * WeChat public user information.
   */
  payer: {
    /**
     * WeChat public user ID.
     */
    openid: string;
  };
}

/**
 * Get JavaScript API payment result.
 *
 * @extends GetTokenResult
 */
export interface GetJavascriptApiPayResult extends GetTokenResult {
  /**
   * Application ID.
   */
  appId: string;

  /**
   * Signature type.
   */
  signType: string;

  /**
   * Payment details extended string.
   */
  package: {
    /**
     * Pre-payment ID.
     */
    prepayId: string;
  };
}

/**
 * Initialize to get JavaScript API payment.
 *
 * @param options WeChatPayOptions
 * @return GetJavascriptApiPay
 */
export interface InitGetJavascriptApiPay {
  (options: WeChatPayOptions): GetJavascriptApiPay;
}

/**
 * Get JavaScript API payment.
 *
 * @param options GetJavascriptApiPayOptions
 * @return Promise<GetJavascriptApiPayResult>
 */
export interface GetJavascriptApiPay {
  (options: GetJavascriptApiPayOptions): Promise<GetJavascriptApiPayResult>;
}
