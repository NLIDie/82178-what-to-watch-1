// Reducer
import {filmsReducer} from "./films";

// Constants
import {
  FILMS_FETCH_REQUEST,
  FILMS_FETCH_SUCCESS,
  FILMS_FETCH_FAILURE
} from "_Store/constants/films";

// Types
import {
  TActionFetchFilmsSuccess,
  TActionFetchFilmsRequest,
  TActionFetchFilmsFailure
} from "_Store/actions/films/films.types";
import {TFilmsState} from "./films.types";

describe(`Reducer/entities-film`, () => {
  it(`1`, () => {
    const action: TActionFetchFilmsRequest = {
      type: FILMS_FETCH_REQUEST
    };

    const state: TFilmsState = filmsReducer(undefined, action);
    const equalState: TFilmsState = {
      items: {},
      error: ``,
      status: `Request`
    };

    expect(state).toEqual(equalState);
  });

  it(`2`, () => {
    const action: TActionFetchFilmsSuccess = {
      type: FILMS_FETCH_SUCCESS,
      payload: {
        films: {}
      }
    };

    const state: TFilmsState = filmsReducer(undefined, action);
    const equalState: TFilmsState = {
      items: {},
      error: ``,
      status: `Success`
    };

    expect(state).toEqual(equalState);
  });

  it(`3`, () => {
    const action: TActionFetchFilmsFailure = {
      type: FILMS_FETCH_FAILURE,
      payload: {
        error: `error`
      }
    };

    const state: TFilmsState = filmsReducer(undefined, action);
    const equalState: TFilmsState = {
      items: {},
      error: `error`,
      status: `Failure`
    };

    expect(state).toEqual(equalState);
  });
});
