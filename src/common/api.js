import axios from 'axios';

export const apiNYT = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2',
  params: {
    'api-key': 'GTpwqf9g6m7jOQriQGGKn58WbxpboOeq',
  },
});

export default { apiNYT };
