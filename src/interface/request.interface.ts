import { HandleResponseResult } from '@leaf-x/fetch'
import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Execute the request options.
 */
export interface ExecRequestOptions {
  /**
   * HTTP request method.
   */
  method?:
    | 'POST'
    | 'GET'
    | 'DELETE'
    | 'HEAD'
    | 'OPTIONS'
    | 'PUT'
    | 'PATCH'
    | 'PURGE'
    | 'LINK'
    | 'UNLINK'

  /**
   * Request headers.
   */
  headers?: Record<string, string>

  /**
   * Request URL address.
   */
  url: string

  /**
   * Request body.
   */
  body?: unknown

  /**
   * Whether the WeChat public request.
   */
  publicApp?: boolean
}

/**
 * Initialize request.
 *
 * @param options WeChatPayOptions
 * @return Request
 */
export interface InitRequest {
  (options: WeChatPayOptions): Request
}

/**
 * Request.
 *
 * @param options ExecRequestOptions
 * @return Promise<unknown>
 */
export interface Request {
  (options: ExecRequestOptions): Promise<unknown>
}

/**
 * Initialize the validate response.
 *
 * @param options WeChatPayOptions
 * @return ValidateResponse
 */
export interface InitValidateResponse {
  (options: WeChatPayOptions): ValidateResponse
}

/**
 * Validate response.
 *
 * @param options HandleResponseResult
 * @return Record<string, unknown>
 */
export interface ValidateResponse {
  (options: HandleResponseResult): Record<string, unknown>
}
