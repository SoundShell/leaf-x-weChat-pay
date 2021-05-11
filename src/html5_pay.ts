import {InitGetHtml5Pay} from './interface/html5_pay.interface';
import {initRequest} from './request';

export const initGetHtml5Pay: InitGetHtml5Pay =
  weChatPayOptions => async options => {
    const {url} = weChatPayOptions;
    const request = initRequest(weChatPayOptions);
    const {h5Url} = (await request({
      method: 'POST',
      url: `${url}/v3/pay/transactions/h5`,
      body: options,
    })) as {h5Url: string};

    return {url: h5Url};
  };
