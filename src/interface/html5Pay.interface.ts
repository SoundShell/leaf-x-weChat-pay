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
 * Html5 payment function.
 */
export interface GetHtml5PayFunction {
  (config: WeChatPayOptions): (
    options: Html5PayOptions
  ) => Promise<{ url: string }>
}
