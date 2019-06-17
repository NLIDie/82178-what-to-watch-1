import * as React from "react";

// Components
import {FilmsGenresNavList} from "_Components/films-genres-nav-list/films-genres-nav-list";
import {FilmCardList} from "_Components/film-card-list/film-card-list";
import {ButtonShowMore} from "_Components/button-show-more/button-show-more";

// Types
import {TProps} from "./films-catalog.types";

export function FilmsCatalog(props: TProps): JSX.Element {
  const {genres, onChangeGenre, films, onClickShowMore, canShowMore} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmsGenresNavList genres={genres} onChange={onChangeGenre} />

      <FilmCardList films={films} />

      {canShowMore && <ButtonShowMore onClick={onClickShowMore} />}
    </section>
  );
}
