// Types
import { TProps as TPropsFilmsCatalog} from '_Components/films-catalog/films-catalog.types'
import { TFilm } from "_Types/film";

export type TProps = {
  readonly films: TFilm[];
  readonly genres: TFilm['genre'][];
  readonly size?: number;
  readonly onChangeGenre: TPropsFilmsCatalog['onChangeGenre'];
}
