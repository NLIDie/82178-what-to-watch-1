import {useSelector} from "react-redux";

// Selectors
import {selectSelectedGenre} from "_Store/selected-genre/selectors/selectors";

// Types
import {TFilm} from "_Types/film";

export function useSelectedGenre(): TFilm["genre"] {
  const genre = useSelector(selectSelectedGenre);

  return genre;
}
