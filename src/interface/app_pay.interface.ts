import {GetTokenResult} from './token.interface';
import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions,
} from './we_chat_pay.interface';

/**
 * Get application payment options.
 *
 * @extends OrderOptions
 */
export interface GetAppPayOptions extends OrderOptions {
  /**
   * Payment amount.
   */
  amount: AmountOptions;

  /**
   * Payment scenario information.
   */
  sceneInfo: SceneInfoOptions;
}

/**
 * Get application payment result.
 *
 * @extends GetTokenResult
 */
export interface GetAppPayResult extends GetTokenResult {
  /**
   * Application ID.
   */
  appId: string;

  /**
   * Merchant ID.
   */
  partnerId: string;

  /**
   * Prepaid session ID.
   */
  prepayId: string;

  /**
   * Order details extension string.
   */
  package: string;
}

/**
 * Initialize to get application payments.
 *
 * @param options WeChatPayOptions
 * @return GetAppPay
 */
export interface InitGetAppPay {
  (options: WeChatPayOptions): GetAppPay;
}

/**
 * Get application payments.
 *
 * @param options GetAppPayOptions
 * @return Promise<GetAppPayResult>
 */
export interface GetAppPay {
  (options: GetAppPayOptions): Promise<GetAppPayResult>;
}
