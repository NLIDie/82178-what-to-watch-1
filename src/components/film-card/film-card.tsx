import * as React from "react";
import {Link} from "react-router-dom";

// Types
import {TProps} from "./film-card.types";

export function FilmCard(props: TProps) {
  const {id, title, preview, onClickPlay} = props;

  const onClickPlayButton = (event: React.SyntheticEvent<HTMLElement>) => {
    onClickPlay(event, id);
  };

  return (
    <article className="small-movie-card catalog__movies-card">
      <button
        className="small-movie-card__play-btn"
        type="button"
        onClick={onClickPlayButton}
      >
        Play
      </button>

      <div className="small-movie-card__image">
        <img src={preview} alt={title} width="280" height="175" />
      </div>

      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/film/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}
