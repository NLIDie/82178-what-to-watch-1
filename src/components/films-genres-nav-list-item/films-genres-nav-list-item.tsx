import * as React from "react";

// Types
import {TProps} from "./films-genres-nav-list-item.types";

export function FilmsGenresNavListItem(props: TProps): JSX.Element {
  const {isActive, genre, onClick} = props;

  const handleGenreClick = (event: React.SyntheticEvent<HTMLElement>) => {
    event.preventDefault();

    onClick(genre, event);
  };

  const cnItem = `catalog__genres-item ${
    isActive ? `catalog__genres-item--active` : ``
  }`;

  return (
    <li className={cnItem} onClick={handleGenreClick}>
      <a className="catalog__genres-link" href="#">
        {genre}
      </a>
    </li>
  );
}
