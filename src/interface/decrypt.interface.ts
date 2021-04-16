import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Decryption options.
 */
export interface DecryptOptions {
  /**
   * Encryption algorithm type.
   */
  algorithm: string

  /**
   * Data ciphertext.
   */
  ciphertext: string

  /**
   * Additional data.
   */
  associated_data?: string

  /**
   * Original type.
   */
  original_type: string

  /**
   * Random string.
   */
  nonce: string
}

/**
 * Decryption function.
 */
export interface DecryptFunction {
  (config: WeChatPayOptions): (
    options: DecryptOptions
  ) => string | Record<string, unknown>
}
