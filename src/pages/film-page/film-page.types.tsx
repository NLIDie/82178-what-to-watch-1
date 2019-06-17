// Types
import {TFilm} from "_Types/film";
import {TComment} from "_Types/comment";

export type TProps = {
  readonly film: TFilm | void;
  readonly comments: TComment[];
  readonly similarFilms: TFilm[];
};

export type TPropsContainer = {
  readonly filmId: TFilm['id'];
};
