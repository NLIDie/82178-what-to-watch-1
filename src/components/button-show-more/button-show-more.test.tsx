import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {ButtonShowMore} from "./button-show-more";

describe(`Components/ButtonShowMore`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(<ButtonShowMore onClick={jest.fn()} />);

    expect(tree).toMatchSnapshot();
  });
});
