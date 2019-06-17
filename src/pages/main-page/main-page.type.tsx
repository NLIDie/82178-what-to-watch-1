import { TFilm } from "_Types/film";

export type TProps = {
  readonly films: TFilm[];
  readonly genres: TFilm['genre'][];
  readonly onChangeGenre: (genre: TFilm["genre"]) => void;
};
