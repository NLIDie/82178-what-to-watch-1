import { TFilm } from "_Types/film";
import { useSelector } from "react-redux";

// Selectors
import { selectOfFilteredFilmsByGenre } from "_Store/films/selectors/selectors";

// Types
import { TRootState } from "_Types/redux";

export function useFilteredFilmsByGenre(genre: TFilm['genre']): TFilm[] {
  const films: TFilm[] = useSelector<TRootState, TFilm[]>(
    state => selectOfFilteredFilmsByGenre(state, genre)
  )

  return films;
}
