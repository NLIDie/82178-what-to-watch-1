import {AxiosResponse} from "axios";

// Api
import Api from "_Api/api";

// Types
import {TUser} from "_Types/user";
import {TDataLogin} from "./authorization.type";

export function login(data: TDataLogin): Promise<AxiosResponse<TUser>> {
  return Api.post<TUser, TDataLogin>(`/login`, data);
}

export function getLogin(): Promise<AxiosResponse<Omit<TUser, "id">>> {
  return Api.get<Omit<TUser, "id">>(`/login`);
}
