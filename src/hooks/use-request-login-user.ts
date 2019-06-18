import * as React from "react";
import {useDispatch} from "react-redux";

// Utils
import {history} from "_Utils/history";

// Types
import {TDispatch} from "_Types/redux";
import {TActionsLoginUser} from "_Store/user/actions/actions.type";
import {effectLoginUser} from "_Store/user/effects/effects";
import {TDataLogin} from "_Api/resources/authorization/authorization.type";

export function useRequestLoginUser() {
  const dispatch = useDispatch<TDispatch<TActionsLoginUser>>();

  const handleLogin = React.useCallback(
      (data: TDataLogin) => {
        dispatch(effectLoginUser(data)).then(() => {
          history.push(`/`);
        });
      },
      [dispatch]
  );

  return handleLogin;
}
