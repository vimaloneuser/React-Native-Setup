import axios from 'axios';
import store from '../redux/store';

let axiosInstance = axios.create({
  baseURL: 'https://reqres.in',
  timeout: 15000,
});
axiosInstance.defaults.headers.post['content-type'] = 'application/json';
store.subscribe(listener);

function listener() {
  if (store.getState() !== undefined) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().login.token}`;
  }
}

export { axiosInstance };
