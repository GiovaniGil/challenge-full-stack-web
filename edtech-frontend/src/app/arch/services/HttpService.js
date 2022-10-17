import axios from 'axios';
import config from '@/config';

const httpService = axios.create({
  baseURL: config.VUE_BASE_API_URL
});

export default httpService;
