// Types
import { TDictionary } from "_Types/types";

export function convertDictionaryToArray<T>(dictionary: TDictionary<T>): T[] {
  return Object.keys(dictionary).map<T>((key: string) => dictionary[key]);
}
