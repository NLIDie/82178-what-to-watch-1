// Actions Constants
import {
  COMMENTS_GET_REQUEST,
  COMMENTS_GET_SUCCESS,
  COMMENTS_GET_FAILURE,
  COMMENTS_CREATE_REQUEST,
  COMMENTS_CREATE_SUCCESS,
  COMMENTS_CREATE_FAILURE
} from "../constants";

// Constants
import {RequestStatuses} from "_Constants/constants";

// Types
import {TCommentsState} from "./reducer.types";
import {
  TCommentsActions,
  TActionGetCommentsForFilmFailure,
  TActionCreateCommentForFilmFailure,
  TActionCreateCommentForFilmSuccess,
  TActionGetCommentsForFilmSuccess
} from "../actions/actions.types";

const INITIAL_STATE: TCommentsState = {
  items: {},
  status: RequestStatuses.INACTIVE,
  error: ``
};

export function commentsReducer(
    state: TCommentsState = INITIAL_STATE,
    action: TCommentsActions
): TCommentsState {
  switch (action.type) {
    case COMMENTS_GET_REQUEST: {
      return Object.assign({}, state, {
        items: {},
        status: RequestStatuses.REQUEST,
        error: ``
      });
    }

    case COMMENTS_GET_SUCCESS: {
      const {payload} = action as TActionGetCommentsForFilmSuccess;

      return Object.assign({}, state, {
        items: payload.comments,
        status: RequestStatuses.REQUEST,
        error: ``
      });
    }

    case COMMENTS_GET_FAILURE: {
      const {payload} = action as TActionGetCommentsForFilmFailure;

      return Object.assign({}, state, {
        status: RequestStatuses.REQUEST,
        error: payload.error
      });
    }

    case COMMENTS_CREATE_REQUEST: {
      return Object.assign({}, state, {
        items: {},
        status: RequestStatuses.REQUEST,
        error: ``
      });
    }

    case COMMENTS_CREATE_SUCCESS: {
      const {payload} = action as TActionCreateCommentForFilmSuccess;

      return Object.assign({}, state, {
        items: payload.comments,
        status: RequestStatuses.REQUEST,
        error: ``
      });
    }

    case COMMENTS_CREATE_FAILURE: {
      const {payload} = action as TActionCreateCommentForFilmFailure;

      return Object.assign({}, state, {
        status: RequestStatuses.REQUEST,
        error: payload.error
      });
    }

    default: {
      return state;
    }
  }
}
