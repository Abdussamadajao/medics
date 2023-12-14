import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const BASE_URL =
  process.env.EXPO_PUBLIC_INSTANCE_ENV === "development"
    ? process.env.EXPO_PUBLIC_DEV_BASE_URL
    : process.env.EXPO_PUBLIC_BASE_URL;

const API_KEY =
  process.env.EXPO_PUBLIC_INSTANCE_ENV === "development"
    ? process.env.EXPO_PUBLIC_API_KEY
    : process.env.EXPO_PUBLIC_PROD_API_KEY;

const _http: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_DEV_BASE_URL,
  headers: {
    Authorization: `Bearer ` + API_KEY,
  },
});

_http.defaults.headers.post["Content-Type"] = "application/json";

export default _http;
