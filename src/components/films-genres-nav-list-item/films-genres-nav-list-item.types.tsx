// Types
import {TFilm} from "_Types/film";

export type TProps = {
  readonly isActive: boolean;
  readonly genre: TFilm['genre'];
  readonly onClick: (
    genres: TFilm['genre'],
    event: React.SyntheticEvent<HTMLElement>,
  ) => void;
};
