// Actions Constants
import {SELECTED_GENRE_CHANGE} from "../constants";

// Types
import {TFilm} from "_Types/film";
import {TSelectedGenreState} from "./reducer.types";
import {
  TSelectedGenreActions,
  TActionChangeSelectedGenre
} from "../actions/action.types";

const INITIAL_STATE: TSelectedGenreState = `All genres`;

export function selectedGenreReducer(
    state: TSelectedGenreState = INITIAL_STATE,
    action: TSelectedGenreActions
): TFilm["genre"] {
  switch (action.type) {
    case SELECTED_GENRE_CHANGE: {
      const {payload} = action as TActionChangeSelectedGenre;

      return payload.genre;
    }

    default: {
      return state;
    }
  }
}
