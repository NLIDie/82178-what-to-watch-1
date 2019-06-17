import {createSelector} from "reselect";

// Utils
import {convertDictionaryToArray} from "_Utils/convert-dictionary-to-array";

// Types
import {TRootState} from "_Types/redux";
import {TComment} from "_Types/comment";
import {TDictionary} from "_Types/types";

export const selectComments = createSelector<
TRootState,
TDictionary<TComment>,
TComment[]
>(
    (state) => state.comments.items,
    convertDictionaryToArray
);
