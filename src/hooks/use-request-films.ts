import * as React from "react";
import {useDispatch} from "react-redux";

// Effects
import {effectGetFilms} from "_Store/films/effects/effects";

export function useRequestFilms() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(effectGetFilms());
  }, []);
}
