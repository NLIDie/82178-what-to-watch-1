import {useSelector} from "react-redux";

// Selectors
import {selectOfFilmById} from "_Store/films/selectors/selectors";

// Types
import {TFilm} from "_Types/film";

import {TRootState} from "_Types/redux";

export function useFilm(filmId: TFilm["id"]): TFilm {
  const film: TFilm = useSelector<TRootState, TFilm>((state) =>
    selectOfFilmById(state, filmId)
  );

  return film;
}
