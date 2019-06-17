type TRepresentationRating =
  | `bad`
  | `normal`
  | `good`
  | `very good`
  | `awesome`;

export function getRepresentationRating(rating: number): TRepresentationRating {
  if (rating < 3) {
    return `bad`;
  }

  if (rating > 3 && rating < 5) {
    return `normal`;
  }

  if (rating > 5 && rating < 8) {
    return `good`;
  }

  if (rating > 8 && rating < 10) {
    return `very good`;
  }

  return `awesome`;
}
