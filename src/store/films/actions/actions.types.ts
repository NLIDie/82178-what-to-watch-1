// Action Constants
import {
  FILMS_GET_REQUEST,
  FILMS_GET_SUCCESS,
  FILMS_GET_FAILURE
} from "_Store/films/constants";

// Types
import {TFilm} from "_Types/film";
import {IAction} from "_Types/redux";
import {TDictionary} from "_Types/types";

export type TActionGetFilmsRequest = IAction<typeof FILMS_GET_REQUEST>;

export type TActionGetFilmsSuccess = IAction<
  typeof FILMS_GET_SUCCESS,
  { films: TDictionary<TFilm> }
>;

export type TActionGetFilmsFailure = IAction<
  typeof FILMS_GET_FAILURE,
  { error: string }
>;

export type TActionsGetFilms =
  | TActionGetFilmsRequest
  | TActionGetFilmsSuccess
  | TActionGetFilmsFailure;

export type TFilmsActions = TActionsGetFilms;
