import {GetAppPay} from './app_pay.interface';
import {Decrypt} from './decrypt.interface';
import {GetHtml5Pay} from './html5_pay.interface';
import {GetJavascriptApiPay} from './javascript_api_pay.interface';
import {GetPublicKeyCertificate} from './public_key_certificate.interface';
import {ShowPay} from './show_pay.interface';
import {ValidateResponseSign} from './token.interface';

/**
 * WeChat payment API options.
 */
export interface WeChatPayOptions {
  /**
   * WeChat application ID.
   */
  appId?: string;

  /**
   * WeChat public number ID.
   */
  publicAppId?: string;

  /**
   * WeChat merchant ID.
   */
  merchantId: string;

  /**
   * WeChat merchant key.
   */
  merchantKey: string;

  /**
   * Encryption algorithm mode. default is WECHATPAY2-SHA256-RSA2048.
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
   * URL of the request.
   */
  url?: string;

  /**
   * Set the request timeout in milliseconds. The default timeout is 3000
   * milliseconds.
   */
  timeout?: number;
}

/**
 * The result of WeChat payment API.
 */
export interface WeChatPayResult {
  /**
   * Get application payment.
   */
  readonly getAppPay: GetAppPay;

  /**
   * Get HTML5 payment.
   */
  readonly getHtml5Pay: GetHtml5Pay;

  /**
   * Get Javascript API payment.
   */
  readonly getJavascriptApiPay: GetJavascriptApiPay;

  /**
   * Get public key certificate.
   */
  readonly getPublicKeyCertificate: GetPublicKeyCertificate;

  /**
   * Show payment details.
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
 * WeChat payment API.
 *
 * @param options WeChatPayOptions
 * @return WeChatPayResult
 */
export interface WeChatPay {
  (options: WeChatPayOptions): WeChatPayResult;
}

/**
 * WeChat payment options for orders.
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
 * The options to pay the order amount by WeChat.
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
   * Merchant-side device ID.
   */
  deviceId?: string;
}
