import * as React from "react";

export type TProps = {
  readonly id: number;
  readonly title: string;
  readonly preview: string;
  readonly onPlay: (
    event: React.SyntheticEvent<HTMLElement>,
    filmId: number
  ) => void;
};
