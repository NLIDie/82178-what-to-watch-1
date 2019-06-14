import * as React from "react";

// Types
import { TProps } from './video-player.types';

export function VideoPlayer(props: TProps): JSX.Element {
  const {
    muted = true,
    poster,
    src,
    onMouseOut,
    onMouseOver,
  } = props;

  return (
    <video
      width="100%"
      height="100%"
      src={src}
      poster={poster}
      muted={muted}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
}
