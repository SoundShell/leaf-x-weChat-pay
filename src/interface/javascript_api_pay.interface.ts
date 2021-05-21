import {GetTokenResult} from './token.interface';
import {
  AmountOptions,
  OrderOptions,
  WeChatPayOptions,
} from './we_chat_pay.interface';

/**
 * Get Javascript API payment options.
 *
 * @extends OrderOptions
 */
export interface GetJavascriptApiPayOptions extends OrderOptions {
  /**
   * Payment amount.
   */
  amount: AmountOptions;

  /**
   * Payer information.
   */
  payer: {
    /**
     * User identification.
     */
    openid: string;
  };
}

/**
 * Get Javascript API payment result.
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
   * Order details extension data.
   */
  package: {
    /**
     * Prepaid session ID.
     */
    prepayId: string;
  };
}

/**
 * Initialize to get Javascript API payment.
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
