import axios from 'axios';
import axiosRetry from 'axios-retry';

export const apiNYT = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2',
  params: {
    'api-key': 'GTpwqf9g6m7jOQriQGGKn58WbxpboOeq',
  },
});

axiosRetry(apiNYT, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 500;
  },
  retryCondition: (error) => {
    return error?.response?.status === 429;
  },
});

export default { apiNYT };
