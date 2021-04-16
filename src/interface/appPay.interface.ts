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

export interface AppPayResult extends GetTokenResult {
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
 * Get the application payment function.
 */
export interface GetAppPayFunction {
  (config: WeChatPayOptions): (
    options: GetAppPayOptions
  ) => Promise<AppPayResult>
}
