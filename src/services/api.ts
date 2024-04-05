import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from './const';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';
import { AppRoute } from '../const';
import { redirect } from 'react-router-dom';
import { getToken } from './token';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        toast.warn<string>(detailMessage.message);
      }

      if (error.response?.status === StatusCodes.NOT_FOUND) {
        redirect(AppRoute.PageNotFound);
      }

      throw error;
    }
  );

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers.Authorization = token;
      }

      return config;
    },
  );

  return api;
};

