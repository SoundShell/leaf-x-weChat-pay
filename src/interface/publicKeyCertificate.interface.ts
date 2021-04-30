import { DecryptOptions } from './decrypt.interface'
import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Public key certificate.
 */
export interface PublicKeyCertificate {
  /**
   * Effective time.
   */
  effectiveTime: string

  /**
   * Expire time.
   */
  expireTime: string

  /**
   * Certificate number.
   */
  serialNo: string
}

/**
 * WeChat public key certificate.
 *
 * @extends PublicKeyCertificate
 */
export interface WeChatPublicKeyCertificate extends PublicKeyCertificate {
  encryptCertificate: DecryptOptions
}

/**
 * Get the results of the public key certificate.
 *
 * @extends PublicKeyCertificate
 */
export interface GetPublicKeyCertificateResult extends PublicKeyCertificate {
  /**
   * certificates.
   */
  certificate: string
}

/**
 * Initialize get public key certificate.
 *
 * @param options InitPublicKeyCertificate
 * @return GetPublicKeyCertificate
 */
export interface InitGetPublicKeyCertificate {
  (options: WeChatPayOptions): GetPublicKeyCertificate
}

/**
 * Get public key certificates.
 *
 * @return Promise<GetPublicKeyCertificateResult[]>
 */
export interface GetPublicKeyCertificate {
  (): Promise<GetPublicKeyCertificateResult[]>
}
