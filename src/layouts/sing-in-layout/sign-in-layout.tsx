import * as React from "react";

// Types
import {TProps} from "./main-layout.types";

export function SignInLayout(props: TProps): JSX.Element {
  const {header, footer, children} = props;

  return (
    <React.Fragment>
      {header}

      <main className="page-content">
        {children}

        {footer}
      </main>
    </React.Fragment>
  );
}
