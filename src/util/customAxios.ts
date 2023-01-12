import axios from "axios";
import Storage from "../storage";
const { REACT_APP_SERVER_URL } = process.env;

const customAxios = axios.create({
  baseURL: REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${Storage.getToken()}`,
  },
  timeout: 3000,
});

customAxios.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    throw new Error("Requset Error");
  }
);

customAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
