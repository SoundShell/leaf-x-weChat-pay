import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * Html5 scene information
 *
 * @extends SceneInfoOptions
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
 *
 * @extends OrderOptions
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
 * Initialize to get html5 payment.
 *
 * @param options WeChatPayOptions
 * @return GetHtml5Pay
 */
export interface InitGetHtml5Pay {
  (options: WeChatPayOptions): GetHtml5Pay
}

/**
 * Get html5 payment.
 *
 * @param options Html5PayOptions
 * @return Promise<{ url: string }>
 */
export interface GetHtml5Pay {
  (options: Html5PayOptions): Promise<{ url: string }>
}
