import * as React from "react";

// Components
import {Review} from "_Components/review/review";

// Types
import {TProps} from "./review-list.types";

export function ReviewList(props: TProps): JSX.Element {
  const {reviews} = props;

  const list: JSX.Element[] = React.useMemo(
      (): JSX.Element[] =>
        reviews.map<JSX.Element>((review) => (
          <Review
            key={review.id}
            comment={review.comment}
            rating={review.rating}
            date={review.date}
            userName={review.user.name}
          />
        )),
      [reviews]
  );

  return <React.Fragment>{list}</React.Fragment>;
}
