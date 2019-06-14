import axios, {AxiosResponse} from "axios";

// Config
import {API_ENTRY} from "../config/config";

// Utils
import {keysToCamelCase} from "_Utils/keys-to-camel-case";

export class Api {
  private _entry: string;

  constructor(entry: string) {
    this._entry = entry;
  }

  get<T>(resource: string): Promise<AxiosResponse<T>> {
    return axios
      .get<T>(`${this._entry}${resource}`)
      .then<AxiosResponse<T>>(keysToCamelCase);
  }

  post<T, D = {}>(resource: string, data?: D): Promise<AxiosResponse<T>> {
    return axios
      .post<T>(`${this._entry}${resource}`, data)
      .then<AxiosResponse<T>>(keysToCamelCase);
  }

  update<T, D = {}>(resource: string, data?: D): Promise<AxiosResponse<T>> {
    return axios
      .put<T>(`${this._entry}${resource}`, data)
      .then<AxiosResponse<T>>(keysToCamelCase);
  }

  delete<T>(resource: string): Promise<AxiosResponse<T>> {
    return axios
      .delete<T>(`${this._entry}${resource}`)
      .then<AxiosResponse<T>>(keysToCamelCase);
  }
}

const ApiInstants = new Api(API_ENTRY);

export default ApiInstants;
