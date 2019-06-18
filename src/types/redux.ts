import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

// Constants
import {ReduxNamespaces, RequestStatuses} from "_Constants/constants";

// Types
import {TFilmsState} from "_Store/films/reducer/reducer.types";
import {TFilmsActions} from "_Store/films/actions/actions.types";
import {TFilmsEffects} from "_Store/films/effects/effects.types";
import {TSelectedGenreState} from "_Store/selected-genre/reducer/reducer.types";
import {TSelectedGenreActions} from "_Store/selected-genre/actions/action.types";
import {TCommentsState} from "_Store/comments/reducer/reducer.types";
import {TCommentsActions} from "_Store/comments/actions/actions.types";
import {TCommentsEffects} from "_Store/comments/effects/effects.types";
import {TUserState} from "_Store/user/reducer/reducer.type";
import {TUserActions} from "_Store/user/actions/actions.type";

export type TRootState = {
  readonly comments: TCommentsState;
  readonly films: TFilmsState;
  readonly selectedGenre: TSelectedGenreState;
  readonly user: TUserState;
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

export type TDispatch<A extends IAction<any>> = ThunkDispatch<
  TRootState,
  TThunkExtraArgument,
  A
>;

export type TEffectAction<R, A extends IAction<any>> = ThunkAction<
  R,
  TRootState,
  TThunkExtraArgument,
  A
>;

export type TRootActions =
  | TFilmsActions
  | TSelectedGenreActions
  | TCommentsActions
  | TUserActions;

export type TRootEffects = TFilmsEffects | TCommentsEffects;

export type TActionsAndEffects = TRootActions | TRootEffects;
