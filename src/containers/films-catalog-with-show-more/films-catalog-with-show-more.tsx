import * as React from "react";

// Components
import {FilmsCatalog} from "_Components/films-catalog/films-catalog";

// Hooks
import {useShowMore} from "_Hooks/use-show-more";

// Types
import {TProps} from "./films-catalog-with-show-more.types";
import {TFilm} from "_Types/film";

export function FilmsCatalogWithShowMore(props: TProps): JSX.Element {
  const {films, size = 8, genres, onChangeGenre} = props;

  const {visibleItems, handleShowMore, canShowMore} = useShowMore<TFilm>(
      films,
      size
  );

  return (
    <FilmsCatalog
      films={visibleItems}
      genres={genres}
      canShowMore={canShowMore}
      onChangeGenre={onChangeGenre}
      onClickShowMore={handleShowMore}
    />
  );
}
