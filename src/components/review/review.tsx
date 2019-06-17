import * as React from "react";

// Types
import {TProps} from "./review.types";

export function Review(props: TProps): JSX.Element {
  const {
    userName,
    rating,
    comment,
    date
  } = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>
            December 24, 2016
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
