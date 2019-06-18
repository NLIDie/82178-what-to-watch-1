// Actions Constants
import {
  USER_LOGIN_SUCCESS,
  USER_CHECK_LOGIN_SUCCESS,
  USER_CHECK_LOGIN_FAILURE
} from "../constants";

// Types
import {IAction} from "_Types/redux";
import {TUser} from "_Types/user";

export type TActionLoginUserSuccess = IAction<
  typeof USER_LOGIN_SUCCESS,
  { user: Omit<TUser, 'id'> }
>;

export type TActionCheckLoginSuccess = IAction<
  typeof USER_CHECK_LOGIN_SUCCESS,
  { user: Omit<TUser, 'id'> }
>;

export type TActionCheckLoginFailure = IAction<typeof USER_CHECK_LOGIN_FAILURE>;

export type TActionsLoginUser = TActionLoginUserSuccess;

export type TActionsCheckLogin =
  | TActionCheckLoginSuccess
  | TActionCheckLoginFailure;

export type TUserActions = TActionsLoginUser | TActionsCheckLogin;
