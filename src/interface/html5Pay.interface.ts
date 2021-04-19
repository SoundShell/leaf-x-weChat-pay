import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * Html5 scene information
 */
export interface Html5SceneInfoOptions extends SceneInfoOptions {
  /**
   * Html5 scenes.
   */
  h5Info: {
    /**
     * Scene type.
     */
    type: 'iOS' | 'Android' | 'Wap'
  }
}

/**
 * Html5 payment options.
 */
export interface Html5PayOptions extends OrderOptions {
  /**
   * Amount.
   */
  amount: AmountOptions

  /**
   * Scene information.
   */
  sceneInfo: Html5SceneInfoOptions
}

/**
 * Initialize html5 payment.
 */
export interface InitHtml5Pay {
  (options: WeChatPayOptions): GetHtml5Pay
}

/**
 * Get html5 payment.
 */
export interface GetHtml5Pay {
  (options: Html5PayOptions): Promise<{ url: string }>
}
