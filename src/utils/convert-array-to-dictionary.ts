// Types
import {TDictionary} from "_Types/types";

export function convertArrayToDictionary<T extends { id: number }>(
    items: T[]
): TDictionary<T> {
  return items.reduce<TDictionary<T>>(
      (dictionary, item) => Object.assign({}, dictionary, {[item.id]: item}),
      {}
  );
}
