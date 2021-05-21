import {DecryptOptions} from './decrypt.interface';
import {WeChatPayOptions} from './we_chat_pay.interface';

/**
 * Public key certificate.
 */
export interface PublicKeyCertificate {
  /**
   * Certificate validity time.
   */
  effectiveTime: string;

  /**
   * Certificate expiration time.
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
 * Get public key certificate result.
 *
 * @extends PublicKeyCertificate
 */
export interface GetPublicKeyCertificateResult extends PublicKeyCertificate {
  /**
   * Public key certificate.
   */
  certificate: string;
}

/**
 * Initialize get the public key certificate.
 *
 * @param options WeChatPayOptions
 * @return GetPublicKeyCertificate
 */
export interface InitGetPublicKeyCertificate {
  (options: WeChatPayOptions): GetPublicKeyCertificate;
}

/**
 * Get a public key certificate.
 *
 * @return Promise<GetPublicKeyCertificateResult[]>
 */
export interface GetPublicKeyCertificate {
  (): Promise<GetPublicKeyCertificateResult[]>;
}
