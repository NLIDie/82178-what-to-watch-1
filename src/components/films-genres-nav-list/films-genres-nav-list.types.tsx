import * as React from "React";

// Types
import {TFilm} from "_Types/film";

export type TProps = {
  readonly genres: TFilm['genre'][];
  readonly onChange: (
    genre: TFilm['genre'],
    event: React.SyntheticEvent<HTMLElement>
  ) => void;
};
