import { GetAppPay } from './appPay.interface'

/**
 * WeChat payment options.
 */
export interface WeChatPayOptions {
  /**
   * Application id.
   */
  appId?: string

  /**
   * Public appId.
   */
  publicAppId?: string

  /**
   * Merchant id.
   */
  merchantId: string

  /**
   * Merchant key.
   */
  merchantKey?: string

  /**
   * Mode.
   *
   * Default WECHATPAY2-SHA256-RSA2048
   */
  schema?: string

  /**
   * Private key.
   */
  privateKey: string

  /**
   * Public key certificate path.
   */
  publicCertPath?: string

  /**
   * Public key certificate directory.
   */
  publicCertDir?: string

  /**
   * Certificate number.
   */
  serialNo: string

  /**
   * Api url address.
   *
   * Default https://api.mch.weixin.qq.com
   */
  url?: string

  /**
   * Timeout time, in milliseconds.
   *
   * Default 3000
   */
  timeout?: number
}

/**
 * WeChat payment.
 */
export interface WeChatPay {
  (options: WeChatPayOptions): () => {
    /**
     * Get the application payment.
     */
    getAppPay: GetAppPay

    // /**
    //  * Decrypt.
    //  */
    // decrypt: Decrypt
  }
}

/**
 * Order options.
 */
export interface OrderOptions {
  /**
   * Product description.
   */
  description: string

  /**
   * Internal order number of the merchant system.
   */
  outTradeNo: string

  /**
   * Order expiration time.
   */
  timeExpire?: string

  /**
   * Additional data.
   */
  attach?: string

  /**
   * Notification url address.
   */
  notifyUrl: string

  /**
   * Order discount marker.
   */
  goodsTag?: string
}

/**
 * Payment amount.
 */
export interface AmountOptions {
  /**
   * Amount.
   */
  total: number

  /**
   * Currency.
   */
  currency?: string
}

/**
 * Payment scenario information options.
 */
export interface SceneInfoOptions {
  /**
   * Client ip.
   */
  payerClientIp: string

  /**
   * Merchant device number.
   */
  deviceId?: string
}
