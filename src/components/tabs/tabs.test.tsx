import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {Tabs} from "./tabs";

describe(`Components/Tabs`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
      <Tabs tabs={['tab1', 'tab2']}>
        {(tab) => <div>tab</div>}
      </Tabs>
    );

    expect(tree).toMatchSnapshot();
  });
});
