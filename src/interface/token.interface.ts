import {ExecRequestOptions} from './request.interface';
import {WeChatPayOptions} from './we_chat_pay.interface';

/**
 * Generate random string.
 *
 * @param length Specify the length of the generated random string.
 * @return string
 */
export interface GenerateNonceString {
  (length: number): string;
}

/**
 * Format key options.
 */
export interface FormatSecretKeyOptions {
  /**
   * Key.
   */
  secretKey: string;

  /**
   * Key type.
   */
  type: string;
}

/**
 * Format key.
 *
 * @param options FormatSecretKeyOptions
 * @return string
 */
export interface FormatSecretKey {
  (options: FormatSecretKeyOptions): string;
}

/**
 * Generate signature options.
 */
export interface GenerateSignOptions {
  /**
   * Signature string.
   */
  signString: string;

  /**
   * Private key.
   */
  privateKey: string;
}

/**
 * Signature.
 *
 * @param options GenerateSignOptions
 * @return string
 */
export interface Sign {
  (options: GenerateSignOptions): string;
}

/**
 * Get request token options.
 */
export interface GetRequestTokenOptions {
  /**
   * HTTP request method.
   */
  method: ExecRequestOptions['method'];

  /**
   * Request URL address.
   */
  url: string;

  /**
   * Request body.
   */
  body?: unknown;

  /**
   * Private key.
   */
  privateKey: string;

  /**
   * Merchant ID.
   */
  merchantId: string;

  /**
   * Certificate number.
   */
  serialNo: string;

  /**
   * Timestamp.
   */
  timestamp: string;
}

/**
 * Get the request token.
 *
 * @param options GetRequestTokenOptions
 * @return string
 */
export interface GetRequestToken {
  (options: GetRequestTokenOptions): string;
}

/**
 * Get JavaScript API token options.
 */
export interface GetJavascriptApiTokenOptions {
  /**
   * Application ID.
   */
  appId: string;

  /**
   * Prepayment information string.
   */
  prepayString: string;

  /**
   * Private key.
   */
  privateKey: string;

  /**
   * Timestamp.
   */
  timestamp: string;
}

/**
 * Get token result.
 */
export interface GetTokenResult {
  /**
   * Random string.
   */
  nonceStr: string;

  /**
   * Timestamp.
   */
  timestamp: string;

  /**
   * Signature.
   */
  sign: string;
}

/**
 * Get JavaScript API token.
 *
 * @param options GetJavascriptApiTokenOptions
 * @return GetTokenResult
 */
export interface GetJavascriptApiToken {
  (options: GetJavascriptApiTokenOptions): GetTokenResult;
}

/**
 * Get the application token options.
 */
export interface GetAppTokenOptions {
  /**
   * Application ID.
   */
  appId: string;

  /**
   * Prepayment ID.
   */
  prepayId: string;

  /**
   * Private Key.
   */
  privateKey: string;

  /**
   * Timestamp.
   */
  timestamp: string;
}

/**
 * Get the application token.
 *
 * @param options GetAppTokenOptions
 * @return GetTokenResult
 */
export interface GetAppToken {
  (options: GetAppTokenOptions): GetTokenResult;
}

/**
 * Validate signature options.
 */
export interface ValidateSignOptions {
  /**
   * Public key.
   */
  publicKey: string;

  /**
   * Signature.
   */
  sign: string;

  /**
   * Signature string.
   */
  signString: string;
}

/**
 * Validate signature.
 *
 * @param options ValidateSignOptions
 * @return boolean
 */
export interface ValidateSign {
  (options: ValidateSignOptions): boolean;
}

/**
 * Validate the response signature options.
 */
export interface ValidateResponseSignOptions {
  /**
   * Random string.
   */
  nonceStr: string;

  /**
   * Timestamp.
   */
  timestamp: string;

  /**
   * Response body.
   */
  body: Record<string, unknown>;

  /**
   * Signature.
   */
  sign: string;

  /**
   * Certificate number.
   */
  serialNo: string;
}

/**
 * Initialize the validate response signature.
 *
 * @param options WeChatPayOptions
 * @return ValidateResponseSign
 */
export interface InitValidateResponseSign {
  (options: WeChatPayOptions): ValidateResponseSign;
}

/**
 * Validate the response signature.
 *
 * @param options ValidateResponseSignOptions
 * @return boolean
 */
export interface ValidateResponseSign {
  (options: ValidateResponseSignOptions): boolean;
}
