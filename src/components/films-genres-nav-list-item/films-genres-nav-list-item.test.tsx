import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {FilmsGenresNavListItem} from "./films-genres-nav-list-item";

describe(`Components/MovieGenresNavListItem`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
        <FilmsGenresNavListItem genre="All genres" onClick={jest.fn()} isActive />
    );

    expect(tree).toMatchSnapshot();
  });
});
