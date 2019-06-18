import * as React from "react";
import {Link} from "react-router-dom";

// Components
import {Logo} from "../logo/logo";

// Hooks
import {useIsAuthorized} from "_Hooks/use-is-authorized";
import {useUser} from "_Hooks/use-user";

// Types
import {TProps} from "./header.types";

export function Header(props: TProps): JSX.Element {
  const {isAuthorized, userAvatar} = props;

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
        {isAuthorized ? (
          <div className="user-block__avatar">
            <img src={userAvatar} alt="User avatar" width="63" height="63" />
          </div>
        ) : (
          <Link to="/login">Sing In</Link>
        )}
      </div>
    </header>
  );
}

function HeaderContainer(): JSX.Element {
  const isAuthorized = useIsAuthorized();
  const user = useUser();

  return <Header userAvatar={user.avatarUrl} isAuthorized={isAuthorized} />;
}

export default HeaderContainer;
