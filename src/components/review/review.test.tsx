import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {Review} from "./review";

describe(`Components/Review`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
        <Review
          userName="Sophie"
          rating={2}
          date="2019-06-03T17:29:12.632Z"
          comment="It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie."
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
