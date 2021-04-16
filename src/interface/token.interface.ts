import { ExecRequestOptions } from './request.interface'

/**
 * Generate random string function.
 *
 * @param length Specify the length of the generated random string.
 */
export interface GenerateNonceStringFunction {
  (length: number): string
}

/**
 * Format key options.
 */
export interface FormatSecretKeyOptions {
  /**
   * Key.
   */
  secretKey: string

  /**
   * Key type.
   */
  type: string
}

/**
 * Formatting key function.
 */
export interface FormatSecretKeyFunction {
  (options: FormatSecretKeyOptions): string
}

/**
 * Generate signature options.
 */
export interface GenerateSignOptions {
  /**
   * Signature string.
   */
  signString: string

  /**
   * Private key.
   */
  privateKey: string
}

/**
 * Generate signature function.
 *
 * @export
 * @interface GenerateSignFunction
 */
export interface GenerateSignFunction {
  (options: GenerateSignOptions): string
}

/**
 * Get request token option.
 */
export interface GetRequestTokenOptions {
  /**
   * Http request method.
   */
  method: ExecRequestOptions['method']

  /**
   * URL address.
   */
  url: string

  /**
   * Request body.
   */
  body?: unknown

  /**
   * Private key.
   */
  privateKey: string

  /**
   * Merchant id.
   */
  merchantId: string

  /**
   * Certificate number
   */
  serialNo: string

  /**
   * Timestamp.
   */
  timestamp: string
}

/**
 * Get request token function.
 */
export interface GetRequestTokenFunction {
  (options: GetRequestTokenOptions): string
}

/**
 * Get javascript api token options.
 */
export interface GetJavascriptApiTokenOptions {
  /**
   * Application id.
   */
  appId: string

  /**
   * Prepayment information string.
   */
  prepayString: string

  /**
   * Private key.
   */
  privateKey: string

  /**
   * Timestamp.
   */
  timestamp: string
}

/**
 * Get token result.
 */
export interface GetTokenResult {
  /**
   * Random string.
   */
  nonceString: string

  /**
   * Timestamp.
   */
  timestamp: string

  /**
   * Signature.
   */
  sign: string
}

/**
 * Get javascript api token function.
 */
export interface GetJavascriptApiTokenFunction {
  (options: GetJavascriptApiTokenOptions): GetTokenResult
}

/**
 * Get the application token.
 */
export interface GetAppTokenOptions {
  /**
   * Application id.
   */
  appId: string

  /**
   * Prepayment id.
   */
  prepayId: string

  /**
   * Private Key.
   */
  privateKey: string

  /**
   * Timestamp.
   */
  timestamp: string
}

/**
 * Get the application function.
 */
export interface GetAppTokenFunction {
  (options: GetAppTokenOptions): GetTokenResult
}

/**
 * Validate the signature options.
 */
export interface ValidateSignOptions {
  /**
   * Public key.
   */
  publicKey: string

  /**
   * Signature.
   */
  sign: string

  /**
   * Signature string.
   */
  signString: string
}

/**
 * Validate the signature function.
 */
export interface ValidateSignFunction {
  (options: ValidateSignOptions): boolean
}
