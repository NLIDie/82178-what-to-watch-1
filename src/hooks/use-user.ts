import {useSelector} from "react-redux";

// Selectors
import {selectUser} from "_Store/user/selectors/selectors";

// Types
import {TUser} from "_Types/user";
import {TRootState} from "_Types/redux";

export function useUser(): Omit<TUser, "id"> {
  const user: Omit<TUser, "id"> = useSelector<TRootState, Omit<TUser, "id">>(
      selectUser
  );

  return user;
}
