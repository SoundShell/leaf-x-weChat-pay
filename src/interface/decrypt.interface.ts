import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Decrypt the options.
 */
export interface DecryptOptions {
  /**
   * Encryption algorithm.
   */
  algorithm: string

  /**
   * Data ciphertext.
   */
  ciphertext: string

  /**
   * Associated data.
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
   * Whether to transfer to JSON data.
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
