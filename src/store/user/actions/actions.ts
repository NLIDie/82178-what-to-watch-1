// Actions Constants
import {
  USER_LOGIN_SUCCESS,
  USER_CHECK_LOGIN_SUCCESS,
  USER_CHECK_LOGIN_FAILURE
} from "../constants";

// Types
import {TUser} from "_Types/user";
import {
  TActionLoginUserSuccess,
  TActionCheckLoginSuccess,
  TActionCheckLoginFailure
} from "./actions.type";

export function actionLoginUserSuccess(
    user: Omit<TUser, "id">
): TActionLoginUserSuccess {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      user
    }
  };
}

export function actionCheckLoginSuccess(
    user: Omit<TUser, "id">
): TActionCheckLoginSuccess {
  return {
    type: USER_CHECK_LOGIN_SUCCESS,
    payload: {
      user
    }
  };
}

export function actionCheckLoginFailure(): TActionCheckLoginFailure {
  return {
    type: USER_CHECK_LOGIN_FAILURE
  };
}
