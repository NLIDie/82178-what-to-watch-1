import { AxiosRequestConfig } from "axios";

export function withStringifyConfigData(
  config: AxiosRequestConfig
): AxiosRequestConfig {
  return Object.assign({}, config, {data: JSON.stringify(config.data)});
}
