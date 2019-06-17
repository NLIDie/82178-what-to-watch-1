import { useSelector } from "react-redux";

// Selectors
import { selectGenresOfFilms } from "_Store/films/selectors/selectors";

// Types
import { TFilm } from "_Types/film";
import { TRootState } from "_Types/redux";

export function useGenresOfFilms(): TFilm['genre'][] {
  const genresOfFilms: TFilm['genre'][] = useSelector<TRootState, TFilm['genre'][]>(
    selectGenresOfFilms
  );

  return genresOfFilms;
}
