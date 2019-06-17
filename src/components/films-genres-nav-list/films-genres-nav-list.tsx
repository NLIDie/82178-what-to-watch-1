import * as React from "react";

// Components
import {FilmsGenresNavListItem} from "../films-genres-nav-list-item/films-genres-nav-list-item";

// Hooks
import {useActiveItem} from "_Hooks/useActiveItem";

// Types
import {TProps} from "./films-genres-nav-list.types";
import {TFilm} from "_Types/film";

export function FilmsGenresNavList(props: TProps): JSX.Element {
  const {onChange, genres} = props;

  const [activeGenre, changeActiveGenre] = useActiveItem<TFilm['genre']>(genres);

  const handleGenreClick = React.useCallback(
      (genre: TFilm['genre'], event: React.SyntheticEvent<HTMLElement>) => {
        changeActiveGenre(genre);
        onChange(genre, event);
      },
      [changeActiveGenre, onChange]
  );

  const links = genres.map((genre) => (
    <FilmsGenresNavListItem
      key={genre}
      isActive={activeGenre === genre}
      genre={genre}
      onClick={handleGenreClick}
    />
  ));

  return <ul className="catalog__genres-list">{links}</ul>;
}
