/* eslint-disable */
import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1/',
    timeout: 6000,
  });

export const posts = () => httpClient.get();