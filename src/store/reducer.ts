import {combineReducers} from "redux";

// Reducers
import {filmsReducer} from "_Store/films/reducer/reducer";
import {selectedGenreReducer} from "_Store/selected-genre/reducer/reducer";
import {commentsReducer} from "_Store/comments/reducer/reducer";
import {userReducer} from "./user/reducer/reducer";

// Constants
import {ReduxNamespaces} from "_Constants/constants";

// Types
import {TRootState, TRootActions} from "_Types/redux";

export const rootReducer = combineReducers<TRootState, TRootActions>({
  [ReduxNamespaces.FILMS]: filmsReducer,
  [ReduxNamespaces.COMMENTS]: commentsReducer,
  [ReduxNamespaces.USER]: userReducer,
  [ReduxNamespaces.SELECTED_GENRE]: selectedGenreReducer
});
