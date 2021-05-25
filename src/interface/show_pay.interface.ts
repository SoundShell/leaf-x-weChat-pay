import {WeChatPayOptions} from './we_chat_pay.interface';

/**
 * The options to show payment details.
 */
export interface ShowPayOptions {
  /**
   * WeChat payment order ID.
   */
  transactionId?: string;

  /**
   * Merchant order ID.
   */
  outTradeNo?: string;
}

/**
 * Show the result of the payment details.
 */
export interface ShowPayResult {
  /**
   * WeChat application ID.
   */
  appid: string;

  /**
   * WeChat merchant ID.
   */
  mchid: string;

  /**
   * Merchant order ID.
   */
  outTradeNo: string;

  /**
   * WeChat payment order ID.
   */
  transactionId?: string;

  /**
   * Transaction type.
   */
  tradeType?: 'JSAPI' | 'NATIVE' | 'APP' | 'MICROPAY' | 'MWEB' | 'FACEPAY';

  /**
   * Transaction status.
   */
  tradeState:
    | 'SUCCESS'
    | 'REFUND'
    | 'NOTPAY'
    | 'CLOSED'
    | 'REVOKED'
    | 'USERPAYING'
    | 'PAYERROR'
    | 'ACCEPT';

  /**
   * Transaction status description.
   */
  tradeStateDesc: string;

  /**
   * Payment bank.
   */
  bankType?: string;

  /**
   * Additional data.
   */
  attach?: string;

  /**
   * Payment completion time.
   */
  successTime?: string;

  /**
   * Payer information.
   */
  payer: {
    /**
     * WeChat public user identification.
     */
    openid: string;
  };

  /**
   * Pay the order amount.
   */
  amount: {
    /**
     * Total amount of payment.
     */
    total: number;

    /**
     * Currency type.
     */
    currency: string;

    /**
     * User payment amount.
     */
    payerTotal: number;

    /**
     * User payment currency.
     */
    payerCurrency: string;
  };

  [key: string]: unknown;
}

/**
 * Initialize the function that show the payment details.
 *
 * @param options WeChatPayOptions
 * @return ShowPay
 */
export interface InitShowPay {
  (options: WeChatPayOptions): ShowPay;
}

/**
 * Show payment details.
 *
 * @param options ShowPayOptions
 * @return Promise<ShowPayResult>
 */
export interface ShowPay {
  (options: ShowPayOptions): Promise<ShowPayResult>;
}
