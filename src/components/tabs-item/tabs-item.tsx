import * as React from "react";

// Types
import {TProps} from "./tabs-item.types";

export function TabsItem(props: TProps): JSX.Element {
  const {onClick, tab, isActive} = props;

  const handleTabClick = (event: React.SyntheticEvent<HTMLElement>) => {
    event.preventDefault();

    onClick(tab, event);
  };

  return (
    <li
      className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`}
      onClick={handleTabClick}
    >
      <a href="#" className="movie-nav__link">
        {tab}
      </a>
    </li>
  );
}
