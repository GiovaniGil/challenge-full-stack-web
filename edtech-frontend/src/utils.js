import config from '@/config';

export default {
  makeDefaultRequestData: () => {
    return {
      baseUrl: config.VUE_BASE_API_URL,
      headers: {},
    };
  },
};
