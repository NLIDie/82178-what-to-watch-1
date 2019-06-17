import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {Footer} from "./footer";

describe(`Components/footer`, () => {
  it(`Correct renderer component`, () => {
    const tree = create(<Footer />);

    expect(tree).toMatchSnapshot();
  });
});
