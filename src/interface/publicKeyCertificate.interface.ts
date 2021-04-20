import { DecryptOptions } from './decrypt.interface'
import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Public key certificate.
 */
export interface PublicKeyCertificate {
  /**
   * Valid time.
   */
  effectiveTime: string

  /**
   * Encrypted certificates.
   */
  encryptCertificate: DecryptOptions

  /**
   * Expiration time.
   */
  expireTime: string

  /**
   * Certificate number.
   */
  serialNo: string
}

/**
 * WeChat public key certificate.
 */
export interface WeChatPublicKeyCertificate {
  /**
   * Valid time.
   */
  effectiveTime: string

  /**
   * Expiration time.
   */
  expireTime: string

  /**
   * Certificate number.
   */
  serialNo: string

  /**
   * Encrypted certificates.
   */
  encryptCertificate: DecryptOptions
}

/**
 * Get Public key certificate result.
 */
export interface GetPublicKeyCertificateResult {
  /**
   * Valid time.
   */
  effectiveTime: string

  /**
   * Expiration time.
   */
  expireTime: string

  /**
   * Certificate number.
   */
  serialNo: string

  /**
   * certificates.
   */
  certificate: string
}

/**
 * Initialize the acquisition of the public key certificate.
 *
 * @param options InitPublicKeyCertificate
 * @return GetPublicKeyCertificate
 */
export interface InitGetPublicKeyCertificate {
  (options: WeChatPayOptions): GetPublicKeyCertificate
}

/**
 * Get the public key certificate.
 *
 * @return Promise<GetPublicKeyCertificateResult[]>
 */
export interface GetPublicKeyCertificate {
  (): Promise<GetPublicKeyCertificateResult[]>
}
