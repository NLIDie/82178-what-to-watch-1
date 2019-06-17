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
          poster="empty"
          previewVideo="empty"
          id={1}
          title="Movie title"
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
