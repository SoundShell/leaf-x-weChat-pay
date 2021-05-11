/**
 * Decrypt options.
 */
export interface DecryptOptions {
  /**
   * Encryption algorithms.
   */
  algorithm: string;

  /**
   * Base64 encoded cipher text.
   */
  ciphertext: string;

  /**
   * Additional data packages.
   */
  associatedData?: string;

  /**
   * Object type before encryption.
   */
  originalType: string;

  /**
   * Random string initialization vector used for encryption.
   */
  nonce: string;

  /**
   * Whether to format as JSON.
   */
  formatJson?: boolean;
}

/**
 * Initialize decrypt.
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
