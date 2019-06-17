export function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/gi, ($1: string): string => {
    return $1
      .toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
}
