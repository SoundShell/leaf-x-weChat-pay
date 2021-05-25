import {
  AmountOptions,
  OrderOptions,
  SceneInfoOptions,
  WeChatPayOptions,
} from './we_chat_pay.interface';

/**
 * Options for HTML5 payment scenario information.
 *
 * @extends SceneInfoOptions
 */
export interface Html5SceneInfoOptions extends SceneInfoOptions {
  /**
   * HTML5 scene information.
   */
  h5Info: {
    /**
     * Types of payment scenarios.
     */
    type: 'iOS' | 'Android' | 'Wap';
  };
}

/**
 * Get options for HTML5 payment.
 *
 * @extends OrderOptions
 */
export interface GetHtml5PayOptions extends OrderOptions {
  /**
   * Total amount of payment.
   */
  amount: AmountOptions;

  /**
   * Payment scenario information.
   */
  sceneInfo: Html5SceneInfoOptions;
}

/**
 * Get the result of HTML5 payment.
 */
export interface GetHtml5PayResult {
  /**
   * URL of the payment.
   */
  url: string;
}

/**
 * Initialize the function to get HTML5 payment.
 *
 * @param options WeChatPayOptions
 * @return GetHtml5Pay
 */
export interface InitGetHtml5Pay {
  (options: WeChatPayOptions): GetHtml5Pay;
}

/**
 * Get HTML5 payment.
 *
 * @param options GetHtml5PayOptions
 * @return Promise<GetHtml5PayResult>
 */
export interface GetHtml5Pay {
  (options: GetHtml5PayOptions): Promise<GetHtml5PayResult>;
}
