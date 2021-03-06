export function chooseEvenItems<T>(items: T[]): T[] {
  return items.filter((_, index) => index % 2 === 0);
}
