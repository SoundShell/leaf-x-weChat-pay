import { GetTokenResult } from './token.interface'
import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * Get the application payment options.
 *
 * @extends OrderOptions
 */
export interface GetAppPayOptions extends OrderOptions {
  /**
   * Amount.
   */
  amount: AmountOptions

  /**
   * Payment scene information.
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
   * Pay details.
   */
  package: string
}

/**
 * Initialize get application payment.
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
