import {GetTokenResult} from './token.interface';
import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions,
} from './we_chat_pay.interface';

/**
 * Get the options to application payment.
 *
 * @extends OrderOptions
 */
export interface GetAppPayOptions extends OrderOptions {
  /**
   * Total amount of payment.
   */
  amount: AmountOptions;

  /**
   * Payment scenario information.
   */
  sceneInfo: SceneInfoOptions;
}

/**
 * Get the result of the application payment.
 *
 * @extends GetTokenResult
 */
export interface GetAppPayResult extends GetTokenResult {
  /**
   * WeChat application ID.
   */
  appId: string;

  /**
   * WeChat merchant ID.
   */
  partnerId: string;

  /**
   * WeChat prepayment order ID.
   */
  prepayId: string;

  /**
   * WeChat order details extension string.
   */
  package: string;
}

/**
 * Initialize the function to get the application payment.
 *
 * @param options WeChatPayOptions
 * @return GetAppPay
 */
export interface InitGetAppPay {
  (options: WeChatPayOptions): GetAppPay;
}

/**
 * Get application payment.
 *
 * @param options GetAppPayOptions
 * @return Promise<GetAppPayResult>
 */
export interface GetAppPay {
  (options: GetAppPayOptions): Promise<GetAppPayResult>;
}
