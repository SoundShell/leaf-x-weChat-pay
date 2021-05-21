/**
 * Decryption options.
 */
export interface DecryptOptions {
  /**
   * Encryption algorithm type.
   */
  algorithm: string;

  /**
   * Data cipher text.
   */
  ciphertext: string;

  /**
   * Additional data.
   */
  associatedData?: string;

  /**
   * Original type.
   */
  originalType: string;

  /**
   * Random string.
   */
  nonce: string;

  /**
   * Whether to format as JSON.
   *
   * Default:false
   */
  formatJson?: boolean;
}

/**
 * Initialize decryption.
 *
 * @param merchantKey Merchant key.
 * @return Decrypt
 */
export interface InitDecrypt {
  (merchantKey: string): Decrypt;
}

/**
 * Decrypt.
 *
 * @param options DecryptOptions
 * @return string | Record<string, unknown>
 */
export interface Decrypt {
  (options: DecryptOptions): string | Record<string, unknown>;
}
