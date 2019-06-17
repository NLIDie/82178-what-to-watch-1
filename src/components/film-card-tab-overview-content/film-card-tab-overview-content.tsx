import * as React from "react";

// Utils
import {getRepresentationRating} from "_Utils/get-representation-rating";

// Types
import {TProps} from "./film-card-tab-overview-content.types";

export function FilmCardTabOverviewContent(props: TProps): JSX.Element {
  const {rating, scoresCount, description, director, starring} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>

        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {getRepresentationRating(rating)}
          </span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>Starring: {starring.join(`, `)}</strong>
        </p>
      </div>
    </React.Fragment>
  );
}
