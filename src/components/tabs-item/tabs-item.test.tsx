import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {TabsItem} from "./tabs-item";

describe(`Components/TabItem`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(<TabsItem tab="tab1" onClick={jest.fn()} isActive />);

    expect(tree).toMatchSnapshot();
  });
});
