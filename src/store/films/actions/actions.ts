// Action Constants
import {
  FILMS_GET_REQUEST,
  FILMS_GET_SUCCESS,
  FILMS_GET_FAILURE
} from "_Store/films/constants";

// Types
import {
  TActionGetFilmsRequest,
  TActionGetFilmsSuccess,
  TActionGetFilmsFailure
} from "_Store/films/actions/actions.types";

import {TDictionary} from "_Types/types";
import {TFilm} from "_Types/film";

export function actionGetFilmsRequest(): TActionGetFilmsRequest {
  return {
    type: FILMS_GET_REQUEST
  };
}

export function actionGetFilmsSuccess(
    films: TDictionary<TFilm>
): TActionGetFilmsSuccess {
  return {
    type: FILMS_GET_SUCCESS,
    payload: {
      films
    }
  };
}

export function actionGetFilmsFailure(error: string): TActionGetFilmsFailure {
  return {
    type: FILMS_GET_FAILURE,
    payload: {
      error
    }
  };
}
