// Types
import {TFilm} from "_Types/film";

export type TProps = {
  readonly genres: TFilm['genre'][];
  readonly films: TFilm[];
  readonly canShowMore: boolean;
  readonly onChangeGenre: (genre: TFilm['genre']) => void;
  readonly onClickShowMore: (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => void;
};
