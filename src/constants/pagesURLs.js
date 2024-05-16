import * as pages from './pages';
import config from 'config';

const result = {
  [pages.defaultPage]: `${config.UI_URL_PREFIX}/${pages.defaultPage}`,
  [pages.login]: `${config.UI_URL_PREFIX}/${pages.login}`,
  [pages.secretPage]: `${config.UI_URL_PREFIX}/${pages.secretPage}`,
  [pages.orderPage]: `${config.UI_URL_PREFIX}/${pages.orderPage}`,
  [pages.orderDetails]: `${config.UI_URL_PREFIX}/${pages.orderDetails}`,
  [pages.addOrderPage]: `${config.UI_URL_PREFIX}/${pages.addOrderPage}`
};

export default result;
