import * as React from "react";

// Types
import { TProps } from './video-player.types';

export function VideoPlayer(props: TProps): JSX.Element {
  const {
    muted = true,
    width = "280",
    height = "176",
    poster,
    src,
    onMouseOut,
    onMouseOver,
  } = props;

  return (
    <video
      width={width}
      height={height}
      src={src}
      poster={poster}
      muted={muted}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
}
