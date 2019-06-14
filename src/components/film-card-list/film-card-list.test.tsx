import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {FilmCardList} from "./film-card-list";

describe(`Components/FilmCardList`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(<FilmCardList films={[]} />);

    expect(tree).toMatchSnapshot();
  });
});
