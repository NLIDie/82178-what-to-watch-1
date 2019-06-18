import {useSelector} from "react-redux";

// Selectors
import {selectIsAuthorized} from "_Store/user/selectors/selectors";

// Types
import {TRootState} from "_Types/redux";

export function useIsAuthorized(): boolean {
  const isAuthorized: boolean = useSelector<TRootState, boolean>(
      selectIsAuthorized
  );

  return isAuthorized;
}
