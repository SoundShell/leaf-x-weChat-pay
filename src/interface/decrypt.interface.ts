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
  associatedData?: string

  /**
   * Original type.
   */
  originalType: string

  /**
   * Random string.
   */
  nonce: string

  /**
   * Whether to convert to JSON.
   */
  formatJson?: boolean
}

/**
 * Initialize the decryption.
 *
 * @param options WeChatPayOptions
 * @return Decrypt
 */
export interface InitDecrypt {
  (options: WeChatPayOptions): Decrypt
}

/**
 * Decrypt.
 *
 * @param options DecryptOptions
 * @return string | Record<string, unknown>
 */
export interface Decrypt {
  (options: DecryptOptions): string | Record<string, unknown>
}
