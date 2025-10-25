import axios, { type AxiosRequestConfig } from "axios";

export interface ErrorResponse {
  message: string;
  success: boolean;
}

export interface FetchResponse<T> {
  success: boolean;
  message: boolean;
  data: T;
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL!,
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (id: number | string, config?: AxiosRequestConfig) => {
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

  patch = async (data: T, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.patch(this.endpoint, data, config);
    return response.data;
  };

  delete = async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.delete(this.endpoint, config);
    return response.data;
  };
}
