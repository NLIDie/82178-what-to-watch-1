// Action Constants
import {SELECTED_GENRE_CHANGE} from "../constants";

// Types
import {IAction} from "_Types/redux";
import {TFilm} from "_Types/film";

export type TActionChangeSelectedGenre = IAction<
  typeof SELECTED_GENRE_CHANGE,
  {
    genre: TFilm['genre'];
  }
>;

export type TSelectedGenreActions = TActionChangeSelectedGenre;
