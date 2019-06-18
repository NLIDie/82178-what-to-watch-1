import * as React from "react";
import {useDispatch} from "react-redux";

// Effects
import {effectCheckLogin} from "_Store/user/effects/effects";

// Types
import {TDispatch} from "_Types/redux";
import {TActionsCheckLogin} from "_Store/user/actions/actions.type";

export function useRequestCheckLogin() {
  const dispatch: TDispatch<TActionsCheckLogin> = useDispatch<
  TDispatch<TActionsCheckLogin>
  >();

  React.useEffect(() => {
    dispatch(effectCheckLogin());
  }, []);
}
