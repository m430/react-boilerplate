import OniApi from 'oni-api-creator';
import { routerRedux } from 'dva/router';

OniApi.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    router.push('/exception/500');
  }
);

const api = {
};

OniApi.use(api);

export default api;
