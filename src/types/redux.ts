import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

// Constants
import {ReduxNamespaces, RequestStatuses} from "_Constants/constants";

// Types
import {TFilmsState} from "_Store/films/reducer/reducer.types";
import {TFilmsEffects} from "_Store/films/effects/effects.types";
import {TFilmsActions} from "_Store/films/actions/actions.types";
import {TSelectedGenreState} from "_Store/selected-genre/reducer/reducer.types";
import {TSelectedGenreActions} from "_Store/selected-genre/actions/action.types";
import {TCommentsState} from "_Store/comments/reducer/reducer.types";
import {TCommentsActions} from "_Store/comments/actions/actions.types";
// import {TUserState} from "_Store/user/reducer/reducer.types";

export type TRootState = {
  readonly comments: TCommentsState;
  readonly films: TFilmsState;
  readonly selectedGenre: TSelectedGenreState;
};

export type TRequestStatus =
  | typeof RequestStatuses.INACTIVE
  | typeof RequestStatuses.REQUEST
  | typeof RequestStatuses.SUCCESS
  | typeof RequestStatuses.FAILURE;

type TThunkExtraArgument = void;

export interface IAction<T, P = {}, M = {}> {
  type: T;
  payload?: P;
  meta?: M;
}

export type TDispatch<A extends IAction<any>> = Dispatch<A>;

export type TEffectAction<R, A extends IAction<any>> = ThunkAction<
  R,
  TRootState,
  TThunkExtraArgument,
  A
>;

export type TEffectDispatch<A extends IAction<any>> = ThunkDispatch<
  TRootState,
  TThunkExtraArgument,
  A
>;

export type TRootActions =
  | TFilmsActions
  | TSelectedGenreActions
  | TCommentsActions;

export type TRootEffects = TFilmsEffects;

export type TActionsAndEffects = TRootActions | TRootEffects;
