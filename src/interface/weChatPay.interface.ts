import { GetAppPay } from './appPay.interface'
import { Decrypt } from './decrypt.interface'
import { GetHtml5Pay } from './html5Pay.interface'
import { GetJavascriptApiPay } from './javascriptApiPay.interface'
import { GetPublicKeyCertificate } from './publicKeyCertificate.interface'
import { ShowPay } from './showPay.interface'
import { ValidateResponseSign } from './token.interface'

/**
 * WeChat payment options.
 */
export interface WeChatPayOptions {
  /**
   * Application ID.
   */
  appId?: string

  /**
   * WeChat public account application ID.
   */
  publicAppId?: string

  /**
   * Merchant ID.
   */
  merchantId: string

  /**
   * Merchant key.
   */
  merchantKey?: string

  /**
   * Encryption algorithm mode.
   *
   * Default: WECHATPAY2-SHA256-RSA2048
   */
  schema?: string

  /**
   * Private key.
   */
  privateKey: string

  /**
   * Public key certificate path.
   */
  publicCertificatePath?: string

  /**
   * Public key certificate directory.
   */
  publicCertificateDir?: string

  /**
   * Certificate number.
   */
  serialNo: string

  /**
   * API address.
   *
   * Default: https://api.mch.weixin.qq.com
   */
  url?: string

  /**
   * Timeout time, in milliseconds.
   *
   * Default: 3000
   */
  timeout?: number
}

/**
 * WeChat payment results.
 */
export interface WeChatPayResult {
  /**
   * Get application payment.
   */
  getAppPay: GetAppPay

  /**
   * Get HTML5 payment.
   */
  getHtml5Pay: GetHtml5Pay

  /**
   * Get JavaScript API payments.
   */
  getJavascriptApiPay: GetJavascriptApiPay

  /**
   * Get public key certificates.
   */
  getPublicKeyCertificate: GetPublicKeyCertificate

  /**
   * Show payment.
   */
  showPay: ShowPay

  /**
   * Validate the response signature.
   */
  validateResponseSign: ValidateResponseSign

  /**
   * Decrypt.
   */
  decrypt: Decrypt
}

/**
 * WeChat payment.
 *
 * @return WeChatPayOptions
 * @return WeChatPayResult
 */
export interface WeChatPay {
  (options: WeChatPayOptions): WeChatPayResult
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
   * Merchant order number.
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
   * Notification URL address.
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
