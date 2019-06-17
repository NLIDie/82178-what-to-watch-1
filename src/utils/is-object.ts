export function isObject<D>(data: D): boolean {
  return (
    data === Object(data) && !Array.isArray(data) && typeof data !== `function`
  );
}
