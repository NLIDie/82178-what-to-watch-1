import * as React from "react";

// Components
import {Logo} from "../logo/logo";

export function Header(): JSX.Element {
  return (
    <header
      className="page-header"
      style={{
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2
      }}
    >
      <Logo />

      <h1 className="visually-hidden">WTW</h1>

      <div className="user-block">
        <div className="user-block__avatar">
          <img
            src="../src/assets/img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </div>
    </header>
  );
}
