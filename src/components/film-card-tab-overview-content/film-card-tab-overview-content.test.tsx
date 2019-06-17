import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {FilmCardTabOverviewContent} from "./film-card-tab-overview-content";

describe(`Components/FilmCardTabOverviewContent`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
        <FilmCardTabOverviewContent
          director="director"
          starring={[`star1`, `star2`]}
          description="description"
          rating={8.2}
          scoresCount={40000}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
