import {RequestOptions} from './request.interface';

/**
 * Generate a random string.
 *
 * @param length Specify the length of the random string.
 * @return string
 */
export interface GenerateNonceString {
  (length: number): string;
}

/**
 * Options for format key.
 */
export interface FormatSecretKeyOptions {
  /**
   * Key
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
 * The options to sign.
 */
export interface SignOptions {
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
 * @param options SignOptions
 * @return string
 */
export interface Sign {
  (options: SignOptions): string;
}

/**
 * The options to get the request token.
 */
export interface GetRequestTokenOptions {
  /**
   * HTTP request method.
   */
  method: RequestOptions['method'];

  /**
   * URL of the request.
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
   * WeChat merchant ID.
   */
  merchantId: string;

  /**
   * Certificate number.
   */
  serialNo: string;

  /**
   * Current timestamp.
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
 * Options to get a Javascript API payment token.
 */
export interface GetJavascriptApiPayTokenOptions {
  /**
   * WeChat application ID.
   */
  appId: string;

  /**
   * WeChat prepayment order ID. string.
   */
  prepayString: string;

  /**
   * Private key.
   */
  privateKey: string;

  /**
   * Current timestamp.
   */
  timestamp: string;
}

/**
 * Get the result of the token.
 */
export interface GetTokenResult {
  /**
   * Random strings.
   */
  nonceStr: string;

  /**
   * Current timestamp.
   */
  timestamp: string;

  /**
   * Signature.
   */
  sign: string;
}

/**
 * Get Javascript API payment token.
 *
 * @param options GetJavascriptApiPayTokenOptions
 * @return GetTokenResult
 */
export interface GetJavascriptApiPayToken {
  (options: GetJavascriptApiPayTokenOptions): GetTokenResult;
}

/**
 * Get the options to apply a payment token.
 */
export interface GetAppTokenPayOptions {
  /**
   * WeChat application ID.
   */
  appId: string;

  /**
   * WeChat prepayment order ID.
   */
  prepayId: string;

  /**
   * Private key.
   */
  privateKey: string;

  /**
   * Current timestamp.
   */
  timestamp: string;
}

/**
 * Get the application payment token.
 *
 * @param options GetAppTokenPayOptions
 * @return GetTokenResult
 */
export interface GetAppPayToken {
  (options: GetAppTokenPayOptions): GetTokenResult;
}

/**
 * The options to Validate the signature.
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
 * Validate the signature.
 *
 * @param options ValidateSignOptions
 * @return boolean
 */
export interface ValidateSign {
  (options: ValidateSignOptions): boolean;
}

/**
 * Validate the response signature.
 */
export interface ValidateResponseSignOptions {
  /**
   * Random strings.
   */
  nonceStr: string;

  /**
   * Signature timestamp.
   */
  timestamp: string;

  /**
   * Response body.
   */
  body: Record<string, unknown>;

  /**
   * Response signature.
   */
  sign: string;

  /**
   * Certificate number.
   */
  serialNo: string;
}

/**
 * Initialize the function that validates the response signature.
 *
 * @param publicCertificateDir Public key certificate directory.
 * @return ValidateResponseSign
 *
 */
export interface InitValidateResponseSign {
  (publicCertificateDir: string): ValidateResponseSign;
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
