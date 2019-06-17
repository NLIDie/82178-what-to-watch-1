import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {FilmCardTabDetailsContent} from "./film-card-tab-details-content";

describe(`Components/FilmCardTabDetailsContent`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
        <FilmCardTabDetailsContent
          director="director"
          genre="All genres"
          released={2014}
          runTime={95}
          starring={[`star1`, `star2`]}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
