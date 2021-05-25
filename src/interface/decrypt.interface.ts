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
   * Whether to format to JSON. default is false.
   */
  formatJson?: boolean;
}

/**
 * Initialize the decryption function.
 *
 * @param merchantKey WeChat merchant key.
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
