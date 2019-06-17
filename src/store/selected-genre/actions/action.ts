// Action Constants
import {SELECTED_GENRE_CHANGE} from "../constants";

// Types
import {TActionChangeSelectedGenre} from "./action.types";
import {TFilm} from "_Types/film";

export function changeSelectedGenre(
    genre: TFilm['genre']
): TActionChangeSelectedGenre {
  return {
    type: SELECTED_GENRE_CHANGE,
    payload: {
      genre
    }
  };
}
