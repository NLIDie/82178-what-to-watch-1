import * as React from "react";

// Utils
import {getDate} from "_Utils/get-date";

// Types
import {TProps} from "./review.types";

export function Review(props: TProps): JSX.Element {
  const {userName, rating, comment, date} = props;

  const newDate = getDate(new Date(date));

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>
            {newDate.month} {newDate.day}, {newDate.year}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
