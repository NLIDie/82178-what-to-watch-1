import * as React from "react";
import {useDispatch} from "react-redux";

// Effects
import {effectGetCommentsForFilm} from "_Store/comments/effects/effects";

// Types
import {TFilm} from "_Types/film";

export function useRequestComments(filmId: TFilm["id"]) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(effectGetCommentsForFilm(filmId));
  }, [filmId]);
}
