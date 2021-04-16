import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Validate the signature options.
 */
export interface validateSignOptions {
  /**
   * Random string.
   */
  nonceString: string

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
 * Validate the signature function.
 */
export interface ValidateSignFunction {
  (config: WeChatPayOptions): (options: validateSignOptions) => boolean
}
