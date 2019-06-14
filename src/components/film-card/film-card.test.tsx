import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {FilmCard} from "./film-card";

jest.mock(`react-router-dom`, () => ({
  BrowserRouter: ({children}) => <div>{children}</div>,
  Route: ({children}) => <div>{children}</div>,
  Link: ({children}) => <a>{children}</a>
}));

describe(`Components/FilmCard`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
        <FilmCard
          id={1}
          title="Movie title"
          preview="empty"
          onClickPlay={jest.fn()}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
