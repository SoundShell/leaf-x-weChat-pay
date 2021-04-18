import { DecryptOptions } from './decrypt.interface'
import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Public key certificate.
 */
export interface PublicKeyCert {
  /**
   * Valid time.
   */
  effective_time: string

  /**
   * Encrypted certificates.
   */
  encrypt_certificate: DecryptOptions

  /**
   * Expiration time.
   */
  expire_time: string

  /**
   * Certificate number.
   */
  serial_no: string
}

/**
 * Get the public key certificate result.
 */
export interface GetPublicKeyCertResult {
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
   * Certificate.
   */
  cert: string
}

/**
 * Get public key certificate.
 */
export interface GetWeChatPublicKeyCert {
  (weChatPayOptions: WeChatPayOptions): () => Promise<GetPublicKeyCertResult[]>
}
