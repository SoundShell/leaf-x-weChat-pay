import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions,
} from './we_chat_pay.interface';

/**
 * HTML5 payment scenario information.
 *
 * @extends SceneInfoOptions
 */
export interface Html5SceneInfoOptions extends SceneInfoOptions {
  /**
   * HTML5 information.
   */
  h5Info: {
    /**
     * Scene type.
     */
    type: 'iOS' | 'Android' | 'Wap';
  };
}

/**
 * HTML5 payment options.
 *
 * @extends OrderOptions
 */
export interface Html5PayOptions extends OrderOptions {
  /**
   * Payment amount options.
   */
  amount: AmountOptions;

  /**
   * HTML5 payment scenario information.
   */
  sceneInfo: Html5SceneInfoOptions;
}

/**
 * Initialize to get HTML5 payment.
 *
 * @param options WeChatPayOptions
 * @return GetHtml5Pay
 */
export interface InitGetHtml5Pay {
  (options: WeChatPayOptions): GetHtml5Pay;
}

/**
 * Get HTML5 payment results.
 */
export interface GetHtml5PayResult {
  /**
   * Payment URL address.
   */
  url: string;
}

/**
 * Get HTML5 payment.
 *
 * @param options Html5PayOptions
 * @return Promise<GetHtml5PayResult>
 */
export interface GetHtml5Pay {
  (options: Html5PayOptions): Promise<GetHtml5PayResult>;
}
