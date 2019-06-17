import * as React from "react";
import {Link} from "react-router-dom";

// Components
import {VideoPlayer} from "_Components/video-player/video-player";

// Types
import {TProps} from "./film-card.types";

export function FilmCard(props: TProps) {
  const {id, title, poster, previewVideo} = props;

  const refTimeout = React.useRef(null);

  const handleMouseOver = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoPlayer = event.currentTarget;

    if (videoPlayer) {
      refTimeout.current = setTimeout(() => {
        const promise = videoPlayer.play();

        if (promise !== undefined) {
          promise.catch(() => {}).then(() => {});
        }
      }, 1000);
    }
  };

  const handleMouseOut = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoPlayer = event.currentTarget;

    if (videoPlayer) {
      videoPlayer.load();
    }

    clearTimeout(refTimeout.current);
  };

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link className="small-movie-card__link" to={`/film/${id}`}>
        <VideoPlayer
          src={previewVideo}
          poster={poster}
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
        />
      </Link>

      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/film/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}
