import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {FilmCardTabReviewsContent} from "./film-card-tab-reviews-content";

describe(`Components/FilmCardTabReviewsContent`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
        <FilmCardTabReviewsContent
          comments={[
            {
              comment: `comment 1`,
              date: new Date().toDateString(),
              id: 1,
              user: {
                id: 1,
                name: `kirill`
              },
              rating: 8.9
            }
          ]}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
