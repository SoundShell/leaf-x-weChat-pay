import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions
} from './weChatPay.interface'

/**
 * HTML5 pays the scene information.
 *
 * @extends SceneInfoOptions
 */
export interface Html5SceneInfoOptions extends SceneInfoOptions {
  /**
   * HTML5 scene.
   */
  h5Info: {
    /**
     * Scene type.
     */
    type: 'iOS' | 'Android' | 'Wap'
  }
}

/**
 * HTML5 payment options.
 *
 * @extends OrderOptions
 */
export interface Html5PayOptions extends OrderOptions {
  amount: AmountOptions
  sceneInfo: Html5SceneInfoOptions
}

/**
 * Initialization get HTM5 payment.
 *
 * @param options WeChatPayOptions
 * @return GetHtml5Pay
 */
export interface InitGetHtml5Pay {
  (options: WeChatPayOptions): GetHtml5Pay
}

/**
 * Get HTML5 payment.
 *
 * @param options Html5PayOptions
 * @return Promise<{ url: string }>
 */
export interface GetHtml5Pay {
  (options: Html5PayOptions): Promise<{ url: string }>
}
