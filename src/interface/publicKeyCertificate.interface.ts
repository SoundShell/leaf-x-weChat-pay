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
 * Initialize public key certificate.
 */
export interface InitPublicKeyCertificate {
  (options: WeChatPayOptions): GetPublicKeyCertificate
}

/**
 * Get public key certificate.
 */
export interface GetPublicKeyCertificate {
  (): Promise<GetPublicKeyCertificateResult[]>
}
