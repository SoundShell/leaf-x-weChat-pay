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
   * WeChat public number ID.
   */
  publicAppId?: string;

  /**
   * Merchant ID.
   */
  merchantId: string;

  /**
   * Merchant key.
   */
  merchantKey: string;

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
   * Public key certificate directory.
   */
  publicCertificateDir: string;

  /**
   * Certificate number.
   */
  serialNo: string;

  /**
   * Request URL.
   */
  url?: string;

  /**
   * Request timeout, in milliseconds.
   *
   * Default:3000ms
   */
  timeout?: number;
}

/**
 * WeChat payment result.
 */
export interface WeChatPayResult {
  /**
   * Get application payments.
   */
  readonly getAppPay: GetAppPay;

  /**
   * Get application payments.
   */
  readonly getHtml5Pay: GetHtml5Pay;

  /**
   * Get Javascript API payment.
   */
  readonly getJavascriptApiPay: GetJavascriptApiPay;

  /**
   * Get a public key certificate.
   */
  readonly getPublicKeyCertificate: GetPublicKeyCertificate;

  /**
   * Show payment.
   */
  readonly showPay: ShowPay;

  /**
   * Validate the response signature.
   */
  readonly validateResponseSign: ValidateResponseSign;

  /**
   * Decrypt.
   */
  readonly decrypt: Decrypt;
}

/**
 * WeChat payment.
 *
 * @param options WeChatPayOptions
 * @return WeChatPayResult
 */
export interface WeChatPay {
  (options: WeChatPayOptions): WeChatPayResult;
}

/**
 * Payment order options.
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
   * Trading end time.
   */
  timeExpire?: string;

  /**
   * Additional data.
   */
  attach?: string;

  /**
   * Notification URL.
   */
  notifyUrl: string;

  /**
   * Order discount marker.
   */
  goodsTag?: string;
}

/**
 * Pay order amount options.
 */
export interface AmountOptions {
  /**
   * The total amount of the order in cents.
   */
  total: number;

  /**
   * Currency type.
   */
  currency?: string;
}

/**
 * Payment scenario description.
 */
export interface SceneInfoOptions {
  /**
   * User terminal IP.
   */
  payerClientIp: string;

  /**
   * Merchant-side device number.
   */
  deviceId?: string;
}
