// Api
import {getFilms} from "_Api/resources/films/films";

// Actions
import {
  actionGetFilmsRequest,
  actionGetFilmsSuccess,
  actionGetFilmsFailure
} from "_Store/films/actions/actions";

// Utils
import {convertArrayToDictionary} from "_Utils/convert-array-to-dictionary";

// Types
import {TEffectGetFilms, TEffectGetFilmsResult} from "./effects.types";
import {TFilm} from "_Types/film";
import {TDispatch} from "_Types/redux";
import {TActionsGetFilms} from "../actions/actions.types";

export function effectGetFilms(): TEffectGetFilms {
  return (dispatch: TDispatch<TActionsGetFilms>): TEffectGetFilmsResult => {
    dispatch(actionGetFilmsRequest());

    return getFilms()
      .then((response) => convertArrayToDictionary<TFilm>(response.data))
      .then((films) => {
        dispatch(actionGetFilmsSuccess(films));
      })
      .catch((error: string) => {
        dispatch(actionGetFilmsFailure(error));
      });
  };
}
