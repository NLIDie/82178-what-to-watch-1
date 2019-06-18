import * as React from "react";

// Utils
import {history} from "_Utils/history";

// Hooks
import {useIsAuthorized} from "./use-is-authorized";

export function useAuthorizationRedirection(redirects: {
authorized: string;
unauthorized?: string;
}) {
  const isAuthorized = useIsAuthorized();

  React.useEffect(() => {
    if (isAuthorized && redirects.authorized) {
      history.replace(redirects.authorized);
    }

    if (!isAuthorized && redirects.unauthorized) {
      history.replace(redirects.unauthorized);
    }
  }, [isAuthorized]);
}
