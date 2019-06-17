import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {Logo} from "./logo";

describe(`Components/Logo`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(<Logo />);

    expect(tree).toMatchSnapshot();
  });
});
