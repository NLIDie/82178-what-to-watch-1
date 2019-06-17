// Action Constants
import {
  FILMS_GET_REQUEST,
  FILMS_GET_SUCCESS,
  FILMS_GET_FAILURE
} from "../constants";

// Constants
import {RequestStatuses} from "_Constants/constants";

// Types
import {
  TFilmsActions,
  TActionGetFilmsSuccess,
  TActionGetFilmsFailure
} from "../actions/actions.types";
import {TFilmsState} from "./reducer.types";

const INITIAL_STATE: TFilmsState = {
  items: {},
  status: RequestStatuses.INACTIVE,
  error: ``
};

export function filmsReducer(
    state: TFilmsState = INITIAL_STATE,
    action: TFilmsActions
): TFilmsState {
  switch (action.type) {
    case FILMS_GET_REQUEST: {
      const updatedState: TFilmsState = Object.assign({}, state, {
        status: RequestStatuses.REQUEST
      });

      return updatedState;
    }

    case FILMS_GET_SUCCESS: {
      const {payload} = action as TActionGetFilmsSuccess;

      const updatedState: TFilmsState = Object.assign({}, state, {
        items: payload.films,
        status: RequestStatuses.SUCCESS
      });

      return updatedState;
    }

    case FILMS_GET_FAILURE: {
      const {payload} = action as TActionGetFilmsFailure;

      const updatedState = Object.assign({}, state, {
        status: RequestStatuses.FAILURE,
        error: payload.error
      });

      return updatedState;
    }

    default: {
      return state;
    }
  }
}
