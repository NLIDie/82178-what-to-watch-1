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
import {IAction} from "_Types/redux";
import {TDictionary} from "_Types/types";
import {TComment} from "_Types/comment";

export type TActionGetCommentsForFilmRequest = IAction<
  typeof COMMENTS_GET_REQUEST
>;

export type TActionGetCommentsForFilmSuccess = IAction<
  typeof COMMENTS_GET_SUCCESS,
  {
    comments: TDictionary<TComment>;
  }
>;

export type TActionGetCommentsForFilmFailure = IAction<
  typeof COMMENTS_GET_FAILURE,
  {
    error: string;
  }
>;

export type TActionsGetCommentsForFilm =
  | TActionGetCommentsForFilmRequest
  | TActionGetCommentsForFilmSuccess
  | TActionGetCommentsForFilmFailure;

export type TActionCreateCommentForFilmRequest = IAction<
  typeof COMMENTS_CREATE_REQUEST
>;

export type TActionCreateCommentForFilmSuccess = IAction<
  typeof COMMENTS_CREATE_SUCCESS,
  {
    comments: TDictionary<TComment>;
  }
>;

export type TActionCreateCommentForFilmFailure = IAction<
  typeof COMMENTS_CREATE_FAILURE,
  {
    error: string;
  }
>;

export type TActionsCreateCommentForFilm =
  | TActionCreateCommentForFilmRequest
  | TActionCreateCommentForFilmSuccess
  | TActionCreateCommentForFilmFailure;

export type TCommentsActions =
  | TActionsGetCommentsForFilm
  | TActionsCreateCommentForFilm;
