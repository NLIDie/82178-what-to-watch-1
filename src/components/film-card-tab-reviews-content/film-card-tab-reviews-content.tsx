import * as React from "react";

// Components
import {ReviewList} from "_Components/review-list/review-list";

// Utils
import {chooseEvenItems} from "_Utils/choose-even-items";
import {chooseOddItems} from "_Utils/choose-odd-items";

// Types
import {TProps} from "./film-card-tab-reviews-content.types";

export function FilmCardTabReviewsContent(props: TProps): JSX.Element {
  const {comments} = props;

  const firstColumnReviews = React.useMemo(() => {
    return chooseEvenItems(comments);
  }, [comments]);

  const secondColumnReviews = React.useMemo(() => {
    return chooseOddItems(comments);
  }, [comments]);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <ReviewList reviews={firstColumnReviews} />
      </div>

      <div className="movie-card__reviews-col">
        <ReviewList reviews={secondColumnReviews} />
      </div>
    </div>
  );
}
