// Utils
import {getRepresentationMonth, TDateMonth} from "./get-representation-month";

type TDate = {
  year: number;
  day: number;
  month: TDateMonth;
};

export function getDate(date: Date): TDate {
  const year: number = date.getFullYear();
  const day: number = date.getDate();
  const month: TDateMonth = getRepresentationMonth(date.getMonth());

  return {
    year,
    day,
    month
  };
}
