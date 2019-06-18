import * as React from "react";
import {useDispatch} from "react-redux";

// Actions
import {changeSelectedGenre} from "_Store/selected-genre/actions/action";

// Types
import {TFilm} from "_Types/film";

type THandle = (genre: TFilm["genre"]) => void;

export function useHandleSelectedGenreChange(): THandle {
  const dispatch = useDispatch();

  const handle = React.useCallback(
      (genre: TFilm["genre"]) => {
        dispatch(changeSelectedGenre(genre));
      },
      [dispatch]
  );

  return handle;
}
