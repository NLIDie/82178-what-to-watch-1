// Types
import { TDictionary } from "_Types/types";
import { TComment } from "_Types/comment";
import { TRequestStatus } from "_Types/redux";

export type TCommentsState = {
  items: TDictionary<TComment>,
  status: TRequestStatus,
  error: string
}
