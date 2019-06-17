// Types
import {TEffectAction} from "_Types/redux";
import {
  TActionsGetCommentsForFilm,
  TActionsCreateCommentForFilm
} from "../actions/actions.types";

export type TEffectResultGetCommentsForFilm = Promise<void>;
export type TEffectGetCommentsForFilm = TEffectAction<
  TEffectResultGetCommentsForFilm,
  TActionsGetCommentsForFilm
>;

export type TEffectResultCreateCommentForFilm = Promise<void>;
export type TEffectCreateCommentForFilm = TEffectAction<
  TEffectResultCreateCommentForFilm,
  TActionsCreateCommentForFilm
>;

export type TCommentsEffects =
  | TEffectGetCommentsForFilm
  | TEffectCreateCommentForFilm;
