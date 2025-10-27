import { getAccessToken } from "@/lib/token";
import axios, {
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios";

export interface ErrorResponse {
  message: string;
  success: boolean;
}

export interface FetchResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL!,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (id: string, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<FetchResponse<T>>(
      `${this.endpoint}/${id}`,
      config
    );
    return response.data;
  };

  getAll = async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return response.data;
  };

  post = async (data: T, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.post(this.endpoint, data, config);
    return response.data;
  };

  patch = async (id: string, data: T, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.patch(
      `${this.endpoint}/${id}`,
      data,
      config
    );
    return response.data;
  };

  delete = async (id: string, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.delete(
      `${this.endpoint}/${id}`,
      config
    );
    return response.data;
  };
}
