// Types
import {TEffectAction} from "_Types/redux";
import {TActionsGetFilms} from "../actions/actions.types";

export type TEffectGetFilmsResult = Promise<any>;

export type TEffectGetFilms = TEffectAction<
  TEffectGetFilmsResult,
  TActionsGetFilms
>;

export type TFilmsEffects = TEffectGetFilms;
