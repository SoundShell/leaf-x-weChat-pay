import { GetTokenResult } from './token.interface'
import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * Get application payment options.
 *
 * @extends OrderOptions
 */
export interface GetAppPayOptions extends OrderOptions {
  /**
   * Payment amount options.
   */
  amount: AmountOptions

  /**
   * Payment scenario information options.
   */
  sceneInfo: SceneInfoOptions
}

/**
 * Get application payment results.
 *
 * @extends GetTokenResult
 */
export interface GetAppPayResult extends GetTokenResult {
  /**
   * Application ID.
   */
  appId: string

  /**
   * Merchant ID.
   */
  partnerId: string

  /**
   * Pre-payment ID.
   */
  prepayId: string

  /**
   * Payment details extended string.
   */
  package: string
}

/**
 * Initialize to get application payment.
 *
 * @param options WeChatPayOptions
 * @return GetAppPay
 */
export interface InitGetAppPay {
  (options: WeChatPayOptions): GetAppPay
}

/**
 * Get application payment.
 *
 * @param options GetAppPayOptions
 * @return Promise<GetAppPayResult>
 */
export interface GetAppPay {
  (options: GetAppPayOptions): Promise<GetAppPayResult>
}
