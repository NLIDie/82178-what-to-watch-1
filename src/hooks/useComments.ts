import {useSelector} from "react-redux";

// Selectors
import {selectComments} from "_Store/comments/selectors/selectors";

// Types
import {TComment} from "_Types/comment";
import {TRootState} from "_Types/redux";

export function useComments(): TComment[] {
  const comments: TComment[] = useSelector<TRootState, TComment[]>(
      selectComments
  );

  return comments;
}
