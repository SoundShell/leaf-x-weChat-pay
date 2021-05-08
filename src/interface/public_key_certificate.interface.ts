import {DecryptOptions} from './decrypt.interface';
import {WeChatPayOptions} from './we_chat_pay.interface';

/**
 * Public key certificate.
 */
export interface PublicKeyCertificate {
  /**
   * Effective time.
   */
  effectiveTime: string;

  /**
   * Expire time.
   */
  expireTime: string;

  /**
   * Certificate number.
   */
  serialNo: string;
}

/**
 * WeChat public key certificate.
 *
 * @extends PublicKeyCertificate
 */
export interface WeChatPublicKeyCertificate extends PublicKeyCertificate {
  /**
   * Encrypted certificate.
   */
  encryptCertificate: DecryptOptions;
}

/**
 * Get the result of the public key certificate.
 *
 * @extends PublicKeyCertificate
 */
export interface GetPublicKeyCertificateResult extends PublicKeyCertificate {
  /**
   * certificate.
   */
  certificate: string;
}

/**
 * Initialize to get public key certificate.
 *
 * @param options InitPublicKeyCertificate
 * @return GetPublicKeyCertificate
 */
export interface InitGetPublicKeyCertificate {
  (options: WeChatPayOptions): GetPublicKeyCertificate;
}

/**
 * Get public key certificate.
 *
 * @return Promise<GetPublicKeyCertificateResult[]>
 */
export interface GetPublicKeyCertificate {
  (): Promise<GetPublicKeyCertificateResult[]>;
}
