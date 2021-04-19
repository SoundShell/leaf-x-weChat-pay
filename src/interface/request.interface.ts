import { HandleResponseResult } from '@leaf-x/fetch'
import { WeChatPayOptions } from './weChatPay.interface'

/**
 * Execute the request options.
 */
export interface ExecRequestOptions {
  /**
   * Http request method.
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
   * Api url address.
   */
  url: string

  /**
   * Request body.
   */
  body?: unknown

  /**
   * Whether public.
   */
  publicApp?: boolean
}

/**
 * Initialize the request.
 */
export interface InitRequest {
  (options: WeChatPayOptions): Request
}

/**
 * Request.
 */
export interface Request {
  (options: ExecRequestOptions): Promise<unknown>
}

/**
 * Validate the response.
 */
export interface ValidateResponse {
  (options: WeChatPayOptions): (
    options: HandleResponseResult
  ) => Record<string, unknown>
}
