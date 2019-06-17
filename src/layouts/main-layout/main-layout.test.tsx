import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {MainLayout} from "./main-layout";

describe(`Layouts/main-layout`, () => {
  it(`Correct renderer layout`, () => {
    function Header(): JSX.Element {
      return <header>Header</header>;
    }

    function Footer(): JSX.Element {
      return <footer>Footer</footer>;
    }

    const tree = create(
        <MainLayout header={<Header />} footer={<Footer />}>
          <div>Main Content</div>
        </MainLayout>
    );

    expect(tree).toMatchSnapshot();
  });
});
