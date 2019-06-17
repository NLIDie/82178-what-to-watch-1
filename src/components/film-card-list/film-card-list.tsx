import * as React from "react";

// Components
import {FilmCard} from "_Components/film-card/film-card";

// Types
import {TProps} from "./film-card-list.types";
import {TFilm} from "_Types/film";

export function FilmCardList(props: TProps) {
  const {films} = props;

  const filmsCards = films.map(
      (film: TFilm): JSX.Element => (
        <FilmCard
          key={film.id}
          id={film.id}
          title={film.name}
          poster={film.previewImage}
          previewVideo={film.previewVideoLink}
        />
      )
  );

  return <div className="catalog__movies-list">{filmsCards}</div>;
}
