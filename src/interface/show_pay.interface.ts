import {WeChatPayOptions} from './we_chat_pay.interface';

/**
 * Show payment options.
 */
export interface ShowPayOptions {
  /**
   * WeChat payment order number.
   */
  transactionId?: string;

  /**
   * Merchant order number.
   */
  outTradeNo?: string;
}

/**
 * Show payment result.
 */
export interface ShowPayResult {
  /**
   * Application ID.
   */
  appid: string;

  /**
   * Directly connected merchant number.
   */
  mchid: string;

  /**
   * Merchant order number.
   */
  outTradeNo: string;

  /**
   * WeChat payment order number.
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
     * User identification.
     */
    openid: string;
  };

  /**
   * Order amount.
   */
  amount: {
    /**
     * Total amount.
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
 * Initialize the show of payments.
 *
 * @param options WeChatPayOptions
 * @return ShowPay
 */
export interface InitShowPay {
  (options: WeChatPayOptions): ShowPay;
}

/**
 * Show payment.
 *
 * @param options ShowPayOptions
 * @return Promise<ShowPayResult>
 */
export interface ShowPay {
  (options: ShowPayOptions): Promise<ShowPayResult>;
}
