// Types
import {TRootState} from "_Types/redux";
import {createSelector} from "reselect";
import {TUser} from "_Types/user";

export const selectUser = createSelector<
TRootState,
Omit<TUser, "id">,
Omit<TUser, "id">
>(
    (state) => state.user,
    (user) => user
);

export const selectIsAuthorized = createSelector<
TRootState,
Omit<TUser, "id">,
boolean
>(
    selectUser,
    (user) => {
      return Boolean(user.email !== '' && user.name !== '');
    }
);
