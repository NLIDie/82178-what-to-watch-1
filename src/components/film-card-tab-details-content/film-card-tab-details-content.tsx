import * as React from 'react';

// Types
import { TProps } from './film-card-tab-details-content.types';

export function FilmCardTabDetailsContent(props: TProps): JSX.Element {
  const {
    director,
    starring,
    runTime,
    genre,
    released
  } = props;

  return (
    <React.Fragment>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">
            Director
          </strong>
          <span className="movie-card__details-value">
            {director}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">
            Starring
          </strong>

          <span className="movie-card__details-value">
            {starring.map((star: string) => (
              <span key={star}>
                {star}
                <br />
              </span>
            ))}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">
            Run Time
          </strong>
          <span className="movie-card__details-value">
            {runTime}
          </span>
        </p>

        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">
            {genre}
          </span>
        </p>

        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">
            Released
          </strong>
          <span className="movie-card__details-value">
            {released}
          </span>
        </p>
      </div>
    </React.Fragment>
  )
}
