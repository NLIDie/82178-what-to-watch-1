// Actions Constants
import {
  COMMENTS_GET_REQUEST,
  COMMENTS_GET_SUCCESS,
  COMMENTS_GET_FAILURE,
  COMMENTS_CREATE_REQUEST,
  COMMENTS_CREATE_SUCCESS,
  COMMENTS_CREATE_FAILURE
} from "../constants";

// Types
import {
  TActionGetCommentsForFilmRequest,
  TActionGetCommentsForFilmSuccess,
  TActionGetCommentsForFilmFailure,
  TActionCreateCommentForFilmRequest,
  TActionCreateCommentForFilmSuccess,
  TActionCreateCommentForFilmFailure
} from "./actions.types";
import {TDictionary} from "_Types/types";
import {TComment} from "_Types/comment";

/* <Get Comments> */

export function actionGetCommentsForFilmRequest(): TActionGetCommentsForFilmRequest {
  return {
    type: COMMENTS_GET_REQUEST
  };
}

export function actionGetCommentsForFilmSuccess(
    comments: TDictionary<TComment>
): TActionGetCommentsForFilmSuccess {
  return {
    type: COMMENTS_GET_SUCCESS,
    payload: {
      comments
    }
  };
}

export function actionGetCommentsForFilmFailure(
    error: string
): TActionGetCommentsForFilmFailure {
  return {
    type: COMMENTS_GET_FAILURE,
    payload: {
      error
    }
  };
}

/* </Get Comments> */

/* <Create Comment> */

export function actionCreateCommentForFilmRequest(): TActionCreateCommentForFilmRequest {
  return {
    type: COMMENTS_CREATE_REQUEST
  };
}

export function actionCreateCommentForFilmSuccess(
    comments: TDictionary<TComment>
): TActionCreateCommentForFilmSuccess {
  return {
    type: COMMENTS_CREATE_SUCCESS,
    payload: {
      comments
    }
  };
}

export function actionCreateCommentForFilmFailure(
    error: string
): TActionCreateCommentForFilmFailure {
  return {
    type: COMMENTS_CREATE_FAILURE,
    payload: {
      error
    }
  };
}

/* </Create Comment> */
