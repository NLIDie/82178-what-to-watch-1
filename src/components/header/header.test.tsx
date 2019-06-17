import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {Header} from "./header";

describe(`Components/Header`, () => {
  it(`Correct rendering the component`, () => {
    const tree = create(<Header />);

    expect(tree).toMatchSnapshot();
  });
});
