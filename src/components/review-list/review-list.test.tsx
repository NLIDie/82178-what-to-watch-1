import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {ReviewList} from "./review-list";

describe(`Components/ReviewList`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
        <ReviewList
          reviews={[
            {
              id: 1,
              rating: 2,
              date: `2019-06-03T17:29:12.632Z`,
              comment:
              `It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.`,
              user: {
                id: 1,
                name: `Sophie`
              }
            }
          ]}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
