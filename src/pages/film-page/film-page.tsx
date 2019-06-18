import * as React from "react";

// Components
import {Tabs} from "_Components/tabs/tabs";
import {FilmCardTabOverviewContent} from "_Components/film-card-tab-overview-content/film-card-tab-overview-content";
import {FilmCardTabDetailsContent} from "_Components/film-card-tab-details-content/film-card-tab-details-content";
import {FilmCardTabReviewsContent} from "_Components/film-card-tab-reviews-content/film-card-tab-reviews-content";

// Hooks
import {useComments} from "_Hooks/use-comments";
import {useFilm} from "_Hooks/use-film";
import {useRequestComments} from "_Hooks/use-request-comments";
import {useRequestFilms} from "_Hooks/use-request-films";
import {useRequestCheckLogin} from "_Hooks/use-check-login";

// Constants
import {
  FILM_CARD_TABS,
  FilmCardTabs,
  TFilmCardTab
} from "_Constants/constants";

// Types
import {TProps, TPropsContainer} from "./film-page.types";
import {FilmCardList} from "_Components/film-card-list/film-card-list";
import {useFilteredFilmsByGenre} from "_Hooks/use-filtered-films-by-genre";
import {TFilm} from "_Types/film";
import {TComment} from "_Types/comment";

export function FilmPage(props: TProps): JSX.Element {
  const {film, comments, similarFilms} = props;

  if (!film) {
    return null;
  }

  const firstFourSimilarFilms: TFilm[] = React.useMemo<TFilm[]>(() => {
    return similarFilms.slice(0, 4);
  }, [similarFilms]);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero" style={{paddingTop: `147px`}}>
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>

                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add" />
                  </svg>
                  <span>My list</span>
                </button>

                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <Tabs className="movie-card__nav" tabs={FILM_CARD_TABS}>
                {(activeTab: TFilmCardTab): JSX.Element => {
                  if (activeTab === FilmCardTabs.OVERVIEW) {
                    return (
                      <FilmCardTabOverviewContent
                        director={film.director}
                        starring={film.starring}
                        description={film.description}
                        rating={film.rating}
                        scoresCount={film.scoresCount}
                      />
                    );
                  }

                  if (activeTab === FilmCardTabs.DETAILS) {
                    return (
                      <div className="movie-card__text movie-card__row">
                        <FilmCardTabDetailsContent
                          director={film.director}
                          genre={film.genre}
                          released={film.released}
                          runTime={film.runTime}
                          starring={film.starring}
                        />
                      </div>
                    );
                  }

                  if (activeTab === FilmCardTabs.REVIEWS) {
                    return <FilmCardTabReviewsContent comments={comments} />;
                  }
                }}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <FilmCardList films={firstFourSimilarFilms} />
        </div>
      </section>
    </React.Fragment>
  );
}

function FilmPageContainer(props: TPropsContainer): JSX.Element {
  const {filmId} = props;

  const film: TFilm | void = useFilm(filmId);
  const comments: TComment[] = useComments();
  const genre: TFilm["genre"] = film ? film.genre : `All genres`;
  const similarFilms: TFilm[] = useFilteredFilmsByGenre(genre);

  useRequestFilms();
  useRequestComments(filmId);
  useRequestCheckLogin();

  return (
    <FilmPage similarFilms={similarFilms} film={film} comments={comments} />
  );
}

export default FilmPageContainer;
