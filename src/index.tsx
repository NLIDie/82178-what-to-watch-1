import * as React from "react";
import * as ReactDOM from "react-dom";

// Components
import {App} from "./app";

function main() {
  const root = document.querySelector(`#root`);

  ReactDOM.render(<App />, root);
}

main();
