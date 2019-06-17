// Types
import {TFilm} from "_Types/film";
import {TDictionary} from "_Types/types";
import {TRequestStatus} from "_Types/redux";

export type TFilmsState = {
  readonly items: TDictionary<TFilm>;
  readonly status: TRequestStatus;
  readonly error: string;
};
