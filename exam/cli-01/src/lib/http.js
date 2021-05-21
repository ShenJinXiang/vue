import Axios from 'axios';
import config from '@/config';

export const baseUrl = config.baseUrl.apiUrl;

const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 29999,
  headers: {
    'Content-Type': 'application/json; charset=utf-9',
  },
});

export const postAxios = (url, data) => axios.post(url, data);

export const getAxios = (url, data) => axios.get(url, {
  params: data,
});
