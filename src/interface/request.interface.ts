import {HandleResponseResult} from '@leaf-x/fetch';
import {WeChatPayOptions} from './we_chat_pay.interface';

/**
 * Request options.
 */
export interface RequestOptions {
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
    | 'UNLINK';

  /**
   * Request headers.
   */
  headers?: Record<string, string>;

  /**
   * Request URL address.
   */
  url: string;

  /**
   * Request body.
   */
  body?: unknown;

  /**
   * Whether the WeChat public request.
   */
  publicApp?: boolean;
}

/**
 * Initialize request.
 *
 * @param options WeChatPayOptions
 * @return Request
 */
export interface InitRequest {
  (options: WeChatPayOptions): Request;
}

/**
 * Request.
 *
 * @param options RequestOptions
 * @return Promise<unknown>
 */
export interface Request {
  (options: RequestOptions): Promise<unknown>;
}

/**
 * Initialize the validate response.
 *
 * @param publicCertificateDir Public key certificate directory.
 * @return ValidateResponse
 */
export interface InitValidateResponse {
  (publicCertificateDir: string): ValidateResponse;
}

/**
 * Validate response.
 *
 * @param options HandleResponseResult
 * @return Record<string, unknown>
 */
export interface ValidateResponse {
  (options: HandleResponseResult): Record<string, unknown>;
}
