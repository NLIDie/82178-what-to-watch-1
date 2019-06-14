// Types
import {TUser} from "./user";

export type TComment = {
  id: number;
  user: TUser;
  rating: number;
  comment: string;
  date: string;
};
