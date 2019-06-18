// Actions Constants
import {
  USER_LOGIN_SUCCESS,
  USER_CHECK_LOGIN_SUCCESS,
  USER_CHECK_LOGIN_FAILURE
} from "../constants";

// Types
import {TUserState} from "./reducer.type";
import {
  TUserActions,
  TActionLoginUserSuccess,
  TActionCheckLoginSuccess
} from "../actions/actions.type";

const INITIAL_STATE: TUserState = {
  avatarUrl: ``,
  name: ``,
  email: ``
};

export function userReducer(
    state: TUserState = INITIAL_STATE,
    action: TUserActions
): TUserState {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const {payload} = action as TActionLoginUserSuccess;

      return Object.assign({}, state, payload.user);
    }

    case USER_CHECK_LOGIN_SUCCESS: {
      const {payload} = action as TActionCheckLoginSuccess;

      return Object.assign({}, state, payload.user);
    }

    case USER_CHECK_LOGIN_FAILURE: {
      return Object.assign({}, INITIAL_STATE);
    }

    default: {
      return state;
    }
  }
}
