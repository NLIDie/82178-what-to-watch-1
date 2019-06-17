// Api
import {
  getCommentsForFilm,
  createCommentForFilm
} from "_Api/resources/comments/comments";

// Actions
import {
  actionCreateCommentForFilmRequest,
  actionCreateCommentForFilmFailure,
  actionCreateCommentForFilmSuccess,
  actionGetCommentsForFilmRequest,
  actionGetCommentsForFilmSuccess,
  actionGetCommentsForFilmFailure
} from "../actions/actions";

// Utils
import {convertArrayToDictionary} from "_Utils/convert-array-to-dictionary";

// Types
import {TFilm} from "_Types/film";
import {TDispatch} from "_Types/redux";
import {
  TActionsCreateCommentForFilm,
  TActionsGetCommentsForFilm
} from "../actions/actions.types";
import {
  TEffectGetCommentsForFilm,
  TEffectResultGetCommentsForFilm,
  TEffectCreateCommentForFilm,
  TEffectResultCreateCommentForFilm
} from "./effects.types";
import {TDataCreateComment} from "_Api/resources/comments/comments.types";

/* <Effect Get Comments For Film> */

export function effectGetCommentsForFilm(
    filmId: TFilm["id"]
): TEffectGetCommentsForFilm {
  return (
      dispatch: TDispatch<TActionsGetCommentsForFilm>
  ): TEffectResultGetCommentsForFilm => {
    dispatch(actionGetCommentsForFilmRequest());

    return getCommentsForFilm(filmId)
      .then((response) => convertArrayToDictionary(response.data))
      .then((comments) => {
        dispatch(actionGetCommentsForFilmSuccess(comments));
      })
      .catch((err) => {
        dispatch(actionGetCommentsForFilmFailure(err));
      });
  };
}

/* </Effect Get Comments For Film> */

/* <Create Comment For Film> */

export function effectCreateCommentForFilm(
    filmId: TFilm["id"],
    commentData: TDataCreateComment
): TEffectCreateCommentForFilm {
  return (
      dispatch: TDispatch<TActionsCreateCommentForFilm>
  ): TEffectResultCreateCommentForFilm => {
    dispatch(actionCreateCommentForFilmRequest());

    return createCommentForFilm(filmId, commentData)
      .then((response) => convertArrayToDictionary(response.data))
      .then((comments) => {
        dispatch(actionCreateCommentForFilmSuccess(comments));
      })
      .catch((err) => {
        dispatch(actionCreateCommentForFilmFailure(err));
      });
  };
}

/* </Create Comment For Film> */
