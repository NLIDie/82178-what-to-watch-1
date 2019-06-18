import axios, {AxiosResponse, AxiosInstance, AxiosRequestConfig} from "axios";

// Config
import {API_ENTRY} from "../config/config";

// Constants
import {HttpStatuses, HttpMethods} from "_Constants/constants";

// Utils
import {withStringifyConfigData} from './api.utils';
import {keysToCamelCase} from "_Utils/keys-to-camel-case";
import {history} from "_Utils/history";

export class Api {
  private _axios: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this._axios = axios.create(config);

    this._init();
  }

  private _init() {
    this._axios.interceptors.response.use(
        this._handleInterceptorResponseSuccess,
        this._handleInterceptorResponseFailure
    );
  }

  private _handleInterceptorResponseSuccess(
      response: AxiosResponse
  ): AxiosResponse {
    return keysToCamelCase(response);
  }

  private _handleInterceptorResponseFailure(err: any): any {
    if (err.response.status === HttpStatuses.FORBIDDEN_403) {
      history.replace(`/login`);
    }

    return err;
  }

  public get<T>(resource: string): Promise<AxiosResponse<T>> {
    return this._axios.get<T>(resource);
  }

  public post<T, D = {}>(
      resource: string,
      data?: D
  ): Promise<AxiosResponse<T>> {
    return this._axios.post<T>(resource, data);
  }

  public update<T, D = {}>(
      resource: string,
      data?: D
  ): Promise<AxiosResponse<T>> {
    return this._axios.put<T>(resource, data);
  }

  public delete<T>(resource: string): Promise<AxiosResponse<T>> {
    return this._axios.delete<T>(resource);
  }
}

const ApiInstants = new Api({
  baseURL: API_ENTRY,
  withCredentials: true
});

export default ApiInstants;
