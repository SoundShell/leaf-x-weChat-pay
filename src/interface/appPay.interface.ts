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
   * Amount.
   */
  amount: AmountOptions

  /**
   * Scene information.
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
   * Application id.
   */
  appId: string

  /**
   * Merchant id.
   */
  partnerId: string

  /**
   * Prepayment id.
   */
  prepayId: string

  /**
   * Order details extension string.
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
 * Get the application payment.
 *
 * @param options GetAppPayOptions
 * @return Promise<GetAppPayResult>
 */
export interface GetAppPay {
  (options: GetAppPayOptions): Promise<GetAppPayResult>
}
