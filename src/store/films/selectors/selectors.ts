import {createSelector} from "reselect";

// Utils
import {convertDictionaryToArray} from "_Utils/convert-dictionary-to-array";

// Types
import {TDictionary} from "_Types/types";
import {TFilm} from "_Types/film";
import {TRootState} from "_Types/redux";

export const selectOfDictionaryFilms = createSelector<
TRootState,
TDictionary<TFilm>,
TDictionary<TFilm>
>(
    (state) => state.films.items,
    (films) => films
);

export const selectOfFilms = createSelector<
TRootState,
TDictionary<TFilm>,
TFilm[]
>(
    selectOfDictionaryFilms,
    convertDictionaryToArray
);

export const selectOfFilteredFilmsByGenre = createSelector<
TRootState,
TFilm["genre"],
TFilm[],
TFilm['genre'],
TFilm[]
>(
    selectOfFilms,
    (_, genre) => genre,
    (films, genre) => {
      if (genre === `All genres`) {
        return films;
      }

      return films.filter((film: TFilm): boolean => film.genre === genre);
    }
);

export const selectOfFilmById = createSelector<
TRootState,
number,
TDictionary<TFilm>,
number,
TFilm
>(
    selectOfDictionaryFilms,
    (_, filmId) => filmId,
    (entitiesFilms, filmId) => entitiesFilms[filmId]
);

export const selectOfSimilarFilms = createSelector<
TRootState,
TFilm['genre'],
TFilm[],
TFilm['genre'],
TFilm[]
>(
    selectOfFilms,
    (_, genre) => genre,
    (films, genre) => films.filter((film) => film.genre === genre)
);

export const selectGenresOfFilms = createSelector<
TRootState,
TFilm[],
TFilm['genre'][]
>(
    selectOfFilms,
    (films) => {
      const genresSet: Set<TFilm['genre']> = films.reduce<Set<TFilm['genre']>>(
          (genresSet, film) => {
            return genresSet.add(film.genre);
          },
          new Set([`All genres`])
      );

      return Array.from(genresSet);
    }
);
