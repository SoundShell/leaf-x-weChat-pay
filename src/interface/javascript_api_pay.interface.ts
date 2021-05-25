import {GetTokenResult} from './token.interface';
import {
  AmountOptions,
  OrderOptions,
  WeChatPayOptions,
} from './we_chat_pay.interface';

/**
 * Get options for Javascript API payment.
 *
 * @extends OrderOptions
 */
export interface GetJavascriptApiPayOptions extends OrderOptions {
  /**
   * Total amount of payment.
   */
  amount: AmountOptions;

  /**
   * Payer information.
   */
  payer: {
    /**
     * WeChat public user identification.
     */
    openid: string;
  };
}

/**
 * Get the result of Javascript API payment.
 *
 * @extends GetTokenResult
 */
export interface GetJavascriptApiPayResult extends GetTokenResult {
  /**
   * WeChat application ID.
   */
  appId: string;

  /**
   * Signature type.
   */
  signType: string;

  /**
   * WeChat order details extension data.
   */
  package: {
    /**
     * WeChat prepayment order ID.
     */
    prepayId: string;
  };
}

/**
 * Initialize the function to get the Javascript API payment.
 *
 * @param options WeChatPayOptions
 * @return GetJavascriptApiPay
 */
export interface InitGetJavascriptApiPay {
  (options: WeChatPayOptions): GetJavascriptApiPay;
}

/**
 * Get Javascript API payment.
 *
 * @param options GetJavascriptApiPayOptions
 * @return Promise<GetJavascriptApiPayResult>
 */
export interface GetJavascriptApiPay {
  (options: GetJavascriptApiPayOptions): Promise<GetJavascriptApiPayResult>;
}
