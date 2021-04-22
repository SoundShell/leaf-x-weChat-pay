import { ExecRequestOptions } from './request.interface'
import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Generate random string function.
 *
 * @param length Specify the length of the generated random string.
 * @return string
 */
export interface GenerateNonceString {
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
 * Formatting key.
 *
 * @param options FormatSecretKeyOptions
 * @return string
 */
export interface FormatSecretKey {
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
 * Sign.
 *
 * @param options GenerateSignOptions
 * @return string
 */
export interface Sign {
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
 * Get request token.
 *
 * @param options GetRequestTokenOptions
 * @return string
 */
export interface GetRequestToken {
  (options: GetRequestTokenOptions): string
}

/**
 * Get the Javascript API token options.
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
 * Get the token result.
 */
export interface GetTokenResult {
  /**
   * Random string.
   */
  nonceStr: string

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
 * Get the Javascript API token.
 *
 * @param options GetJavascriptApiTokenOptions
 * @return GetTokenResult
 */
export interface GetJavascriptApiToken {
  (options: GetJavascriptApiTokenOptions): GetTokenResult
}

/**
 * Get the application token options.
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
 * Get the application.
 *
 * @param options GetAppTokenOptions
 * @return GetTokenResult
 */
export interface GetAppToken {
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
 * Validate the signature.
 *
 * @param options ValidateSignOptions
 * @return boolean
 */
export interface ValidateSign {
  (options: ValidateSignOptions): boolean
}

/**
 * Validate the response signature options.
 */
export interface ValidateResponseSignOptions {
  /**
   * Random string.
   */
  nonceStr: string

  /**
   * Timestamp.
   */
  timestamp: string

  /**
   * Response body.
   */
  body: Record<string, unknown>

  /**
   * Signature.
   */
  sign: string

  /**
   * Certificate number.
   */
  serialNo: string
}

/**
 * Initialize the verification response signature.
 *
 * @param options WeChatPayOptions
 * @param ValidateResponseSign
 */
export interface InitValidateResponseSign {
  (options: WeChatPayOptions): ValidateResponseSign
}

/**
 * Validate the response signature.
 *
 * @param options ValidateResponseSignOptions
 * @return boolean
 */
export interface ValidateResponseSign {
  (options: ValidateResponseSignOptions): boolean
}
