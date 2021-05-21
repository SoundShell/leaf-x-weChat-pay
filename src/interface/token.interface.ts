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
 * Formatting key options.
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
 * Formatting key.
 *
 * @param options FormatSecretKeyOptions
 * @return string
 */
export interface FormatSecretKey {
  (options: FormatSecretKeyOptions): string;
}

/**
 * Signature options.
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
 * Get request token options.
 */
export interface GetRequestTokenOptions {
  /**
   * HTTP request method.
   */
  method: RequestOptions['method'];

  /**
   * Request URL.
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
 * Get the Javascript API payment token options.
 */
export interface GetJavascriptApiPayTokenOptions {
  /**
   * Application ID.
   */
  appId: string;

  /**
   * Prepaid session ID string.
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
 * Get token result.
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
 * Get Javascript Api payment token.
 *
 * @param options GetJavascriptApiPayTokenOptions
 * @return GetTokenResult
 */
export interface GetJavascriptApiPayToken {
  (options: GetJavascriptApiPayTokenOptions): GetTokenResult;
}

/**
 * Get the application payment token options.
 */
export interface GetAppTokenPayOptions {
  /**
   * Application ID.
   */
  appId: string;

  /**
   * Prepaid session ID.
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
 * Initialize the validate response signature.
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
