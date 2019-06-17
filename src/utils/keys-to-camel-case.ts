// Utils
import {toCamelCase} from "_Utils/to-camel-case";
import {isObject} from "_Utils/is-object";

export function keysToCamelCase(data: any) {
  if (isObject<any>(data)) {
    const n = {};

    Object.keys(data).forEach((key: string) => {
      n[toCamelCase(key)] = keysToCamelCase(data[key]);
    });

    return n;
  }

  if (Array.isArray(data)) {
    return data.map((item) => {
      return keysToCamelCase(item);
    });
  }

  return data;
}
