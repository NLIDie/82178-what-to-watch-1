// Api
import {login, checkLogin} from "_Api/resources/authorization/authorization";

// Actions
import {
  actionLoginUserSuccess,
  actionCheckLoginSuccess,
  actionCheckLoginFailure
} from "../actions/actions";

// Types
import {TEffectAction, TDispatch, TRootState} from "_Types/redux";
import {TActionsCheckLogin, TActionsLoginUser} from "../actions/actions.type";
import {TDataLogin} from "_Api/resources/authorization/authorization.type";
import { ThunkDispatch } from "redux-thunk";

export function effectLoginUser(
    data: TDataLogin
): TEffectAction<Promise<void>, TActionsLoginUser> {
  return (dispatch: ThunkDispatch<TRootState, {}, TActionsLoginUser>): Promise<void> => {
    return login(data)
      .then((response) => {
        dispatch(actionLoginUserSuccess(response.data));
      })
      .catch((error) => console.error(error));
  };
}

export function effectCheckLogin(): TEffectAction<
Promise<void>,
TActionsCheckLogin
> {
  return (dispatch: TDispatch<TActionsCheckLogin>): Promise<void> => {
    return checkLogin()
      .then((response) => {
        dispatch(actionCheckLoginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actionCheckLoginFailure());
        console.error(error);
      });
  };
}
