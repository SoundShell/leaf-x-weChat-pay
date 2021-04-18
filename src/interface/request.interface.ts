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
    | undefined

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
 * Execute the request.
 */
export interface Request {
  (weChatPayOptions: WeChatPayOptions): (
    options: ExecRequestOptions
  ) => Promise<unknown>
}
