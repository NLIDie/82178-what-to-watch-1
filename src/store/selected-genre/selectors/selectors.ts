import {createSelector} from "reselect";

// Types

import {TFilm} from "_Types/film";
import {TRootState} from "_Types/redux";

export const selectSelectedGenre = createSelector<
TRootState,
TFilm["genre"],
TFilm["genre"]
>(
    (state) => state.selectedGenre,
    (filmGenre) => filmGenre
);
