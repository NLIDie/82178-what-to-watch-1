import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {Header} from "./header";

jest.mock(`react-router-dom`, () => ({
  BrowserRouter: ({children}) => <div>{children}</div>,
  Route: ({children}) => <div>{children}</div>,
  Link: ({children}) => <a>{children}</a>
}));

describe(`Components/Header`, () => {
  it(`Correct rendering the component`, () => {
    const tree = create(
        <Header isAuthorized={false} userAvatar="empty/path" />
    );

    expect(tree).toMatchSnapshot();
  });
});
