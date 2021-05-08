import {GetAppPay} from './app_pay.interface';
import {Decrypt} from './decrypt.interface';
import {GetHtml5Pay} from './html5_pay.interface';
import {GetJavascriptApiPay} from './javascript_api_pay.interface';
import {GetPublicKeyCertificate} from './public_key_certificate.interface';
import {ShowPay} from './show_pay.interface';
import {ValidateResponseSign} from './token.interface';

/**
 * WeChat payment options.
 */
export interface WeChatPayOptions {
  /**
   * Application ID.
   */
  appId?: string;

  /**
   * WeChat public account application ID.
   */
  publicAppId?: string;

  /**
   * Merchant ID.
   */
  merchantId: string;

  /**
   * Merchant key.
   */
  merchantKey?: string;

  /**
   * Encryption algorithm mode.
   *
   * Default: WECHATPAY2-SHA256-RSA2048
   */
  schema?: string;

  /**
   * Private key.
   */
  privateKey: string;

  /**
   * Public key certificate path.
   */
  publicCertificatePath?: string;

  /**
   * Public key certificate directory.
   */
  publicCertificateDir?: string;

  /**
   * Certificate number.
   */
  serialNo: string;

  /**
   * Request URL address.
   *
   * Default https://api.mch.weixin.qq.com
   */
  url?: string;

  /**
   * The request timeout time in milliseconds.
   *
   * Default 3000ms
   */
  timeout?: number;
}

/**
 * WeChat payment result.
 */
export interface WeChatPayResult {
  /**
   * Get application payment.
   */
  getAppPay: GetAppPay;

  /**
   * Get HTML5 payment.
   */
  getHtml5Pay: GetHtml5Pay;

  /**
   * Get JavaScript API payment.
   */
  getJavascriptApiPay: GetJavascriptApiPay;

  /**
   * Get public key certificate.
   */
  getPublicKeyCertificate: GetPublicKeyCertificate;

  /**
   * Show payment.
   */
  showPay: ShowPay;

  /**
   * Validate the response signature.
   */
  validateResponseSign: ValidateResponseSign;

  /**
   * Decrypt.
   */
  decrypt: Decrypt;
}

/**
 * WeChat payment.
 *
 * @param WeChatPayOptions
 * @return WeChatPayResult
 */
export interface WeChatPay {
  (options: WeChatPayOptions): WeChatPayResult;
}

/**
 * Order options.
 */
export interface OrderOptions {
  /**
   * Product description.
   */
  description: string;

  /**
   * Merchant order number.
   */
  outTradeNo: string;

  /**
   * Order expiration time.
   */
  timeExpire?: string;

  /**
   * Additional data.
   */
  attach?: string;

  /**
   * Notification URL address.
   */
  notifyUrl: string;

  /**
   * Order discount marker.
   */
  goodsTag?: string;
}

/**
 * Payment amount.
 */
export interface AmountOptions {
  /**
   * Amount.
   */
  total: number;

  /**
   * Currency.
   */
  currency?: string;
}

/**
 * Payment scenario information options.
 */
export interface SceneInfoOptions {
  /**
   * Client IP.
   */
  payerClientIp: string;

  /**
   * Merchant device ID.
   */
  deviceId?: string;
}
