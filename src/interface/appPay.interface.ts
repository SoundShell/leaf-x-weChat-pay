import { GetTokenResult } from './token.interface'
import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * Get application payment options.
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
 * Initialize application payments.
 */
export interface InitAppPay {
  (options: WeChatPayOptions): GetAppPay
}

/**
 * Get the application payment.
 */
export interface GetAppPay {
  (options: GetAppPayOptions): Promise<GetAppPayResult>
}
