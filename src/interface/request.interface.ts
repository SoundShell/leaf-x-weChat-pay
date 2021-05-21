import {HandleResponseResult} from '@leaf-x/fetch';
import {WeChatPayOptions} from './we_chat_pay.interface';

/**
 * Request options.
 */
export interface RequestOptions {
  /**
   * HTTP request method.
   *
   * Default:GET
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
   * Request URL.
   */
  url: string;

  /**
   * Request body.
   */
  body?: unknown;

  /**
   * Whether the WeChat public request.
   *
   * Default:false
   */
  publicApp?: boolean;
}

/**
 * Initialization request.
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
 * Initialize the validation response.
 *
 * @param publicCertificateDir Public key certificate directory.
 * @return ValidateResponse
 */
export interface InitValidateResponse {
  (publicCertificateDir: string): ValidateResponse;
}

/**
 * Validate the response.
 *
 * @param options HandleResponseResult
 * @return Record<string, unknown>
 */
export interface ValidateResponse {
  (options: HandleResponseResult): Record<string, unknown>;
}
